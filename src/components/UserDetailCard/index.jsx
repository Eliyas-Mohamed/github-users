import {
  Grid,
  Avatar,
  Card,
  Typography,
  Link,
  CardContent,
  Skeleton,
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link as RouterLink } from 'react-router-dom';
import UserDetailCardStats from './UserDetailCardStats';
import UserDetailCardLinks from './UserDetailCardLinks';
const UserDetailCard = ({ userDetails, loading }) => {
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
              <UserDetailNameGhost />
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  {userDetails?.name}
                </Typography>
                <Link href={userDetails?.html_url} sx={{ display: 'block' }}>
                  @{userDetails?.login}
                </Link>
              </>
            )}
            <UserDetailCardStats
              userStats={userDetails.userStats}
              loading={loading}
            />
            <UserDetailCardLinks
              userInfo={userDetails.userInfo}
              loading={loading}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default UserDetailCard;

const UserDetailNameGhost = () => (
  <>
    <Skeleton
      variant="rectangular"
      className="darker"
      sx={{ marginBottom: '25px' }}
      width={150}
      height={15}
    />
    <Skeleton variant="rectangular" className="darker" width={80} height={15} />
  </>
);
