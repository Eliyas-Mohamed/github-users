import {
  Grid,
  Avatar,
  Paper,
  Card,
  Typography,
  Link,
  CardContent,
  Skeleton,
} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import XIcon from '@mui/icons-material/X';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LinkIconText from '../components/LinkIconText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link as RouterLink } from 'react-router-dom';
import CenterAlignedSubtitleBody from '../components/CenterAlignedSubtitleBody';

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let { userName } = useParams();
  useEffect(() => {
    if (Boolean(userName)) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setUserDetails(data);
        });
    }
  }, [userName]);

  return (
    <Card sx={{ padding: '15px' }}>
      <CardContent>
        <RouterLink to={'/'}>
          <ArrowBackIosIcon />
        </RouterLink>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {loading ? (
              <Skeleton
                variant="circular"
                className="darker"
                width={120}
                height={120}
              />
            ) : (
              <Avatar
                sizes="xl"
                alt="profileimg"
                sx={{ width: '120px', height: '120px' }}
                src={userDetails.avatar_url}
              />
            )}
          </Grid>
          <Grid item xs={9}>
            {loading ? (
              <>
                <Skeleton
                  variant="rectangular"
                  className="darker"
                  sx={{ marginBottom: '25px' }}
                  width={150}
                  height={15}
                />
                <Skeleton
                  variant="rectangular"
                  className="darker"
                  width={80}
                  height={15}
                />
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  {userDetails?.name}
                </Typography>
                <Link href={userDetails?.html_url} sx={{ display: 'block' }}>
                  @{userName}
                </Link>
              </>
            )}

            <Paper elevation={4} sx={{ margin: '25px 0', padding: '10px' }}>
              <Grid container spacing={0}>
                <Grid item md={4} sx={{ textAlign: 'center' }}>
                  <CenterAlignedSubtitleBody
                    loading={loading}
                    title={'Repos'}
                    subtitle={userDetails?.public_repos}
                  />
                </Grid>
                <Grid item md={4} sx={{ textAlign: 'center' }}>
                  <CenterAlignedSubtitleBody
                    loading={loading}
                    title={'Followers'}
                    subtitle={userDetails?.followers}
                  />
                </Grid>
                <Grid item md={4} sx={{ textAlign: 'center' }}>
                  <CenterAlignedSubtitleBody
                    loading={loading}
                    title={'Following'}
                    subtitle={userDetails?.following}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Grid container>
              <Grid
                item
                container
                direction={'row'}
                sx={{ marginBottom: '10px' }}
                md={6}
              >
                <LinkIconText
                  icon={<LocationOnIcon />}
                  text={userDetails?.location}
                  loading={loading}
                />
              </Grid>
              <Grid
                item
                container
                direction={'row'}
                sx={{ marginBottom: '10px' }}
                md={6}
              >
                <LinkIconText
                  icon={<ApartmentIcon />}
                  text={userDetails?.company}
                  loading={loading}
                />
              </Grid>
              <Grid
                item
                container
                direction={'row'}
                sx={{ marginBottom: '10px' }}
                md={6}
              >
                <LinkIconText
                  href={
                    Boolean(userDetails.twitter_username)
                      ? `https://twitter.com/${userDetails.twitter_username}`
                      : null
                  }
                  icon={<XIcon />}
                  text={userDetails.twitter_username}
                  loading={loading}
                />
              </Grid>
              <Grid
                item
                container
                direction={'row'}
                sx={{ marginBottom: '10px' }}
                md={6}
              >
                <LinkIconText
                  href={userDetails?.blog}
                  icon={<InsertLinkIcon />}
                  text={userDetails?.blog}
                  loading={loading}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default UserDetail;
