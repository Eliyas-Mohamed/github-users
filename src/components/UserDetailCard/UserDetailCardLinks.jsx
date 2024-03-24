import { Grid } from '@mui/material';
import LinkIconText from '../LinkIconText';
const UserDetailCardLinks = ({ userInfo, loading }) => {
  return (
    <Grid container>
      {userInfo?.map(({ icon, text, href }) => (
        <Grid
          item
          container
          direction={'row'}
          sx={{ marginBottom: '10px' }}
          md={6}
        >
          <LinkIconText href={href} icon={icon} text={text} loading={loading} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserDetailCardLinks;
