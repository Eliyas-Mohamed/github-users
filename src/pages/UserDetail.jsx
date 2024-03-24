import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserDetailCard from '../components/UserDetailCard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import XIcon from '@mui/icons-material/X';
const UserDetail = () => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let { userName } = useParams();
  useEffect(() => {
    if (Boolean(userName)) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then(
          ({
            avatar_url,
            html_url,
            name,
            public_repos,
            followers,
            following,
            twitter_username,
            login,
            location,
            company,
            blog,
          }) => {
            setLoading(false);
            setUserDetails({
              avatar_url,
              html_url,
              name,
              login,
              userStats: [
                {
                  title: 'Repos',
                  body: public_repos,
                },
                {
                  title: 'Followers',
                  body: followers,
                },
                {
                  title: 'Following',
                  body: following,
                },
              ],
              userInfo: [
                {
                  href: null,
                  icon: <LocationOnIcon />,
                  text: location,
                },
                {
                  href: null,
                  icon: <ApartmentIcon />,
                  text: company,
                },
                {
                  href: blog,
                  icon: <InsertLinkIcon />,
                  text: blog,
                },
                {
                  href: Boolean(twitter_username)
                    ? `https://twitter.com/${twitter_username}`
                    : null,
                  icon: <XIcon />,
                  text: twitter_username,
                },
              ],
            });
          }
        );
    }
  }, [userName]);

  return <UserDetailCard userDetails={userDetails} loading={loading} />;
};
export default UserDetail;
