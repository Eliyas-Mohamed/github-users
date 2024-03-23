import * as React from 'react';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton, Divider, Box, Skeleton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [userList, setUsersList] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsersList(data);
      });
  }, []);

  return (
    <List sx={{ width: '100%' }}>
      {userList.length
        ? userList?.map(({ avatar_url, login, id }) => (
            <>
              <Link to={`userdetail/${login}`} key={id}>
                <ListItemButton className="bg-secondary" key={id}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={avatar_url} />
                  </ListItemAvatar>
                  <ListItemText primary={login} className="text-white" />
                </ListItemButton>
              </Link>

              <Divider variant="middle" component="li" />
            </>
          ))
        : Array.from(new Array(10)).map(() => (
            <Box
              sx={{
                display: 'flex',
                marginBottom: '10 px',
                alignItems: 'center',
              }}
            >
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton
                variant="rectangular"
                sx={{ marginLeft: '10px' }}
                width={'100%'}
                height={40}
              />
            </Box>
          ))}
    </List>
  );
}
