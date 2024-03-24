import { Paper, Grid } from '@mui/material';
import CenterAlignedSubtitleBody from '../CenterAlignedSubtitleBody';
const UserDetailCardStats = ({ loading, userStats }) => {
  return (
    <Paper elevation={4} sx={{ margin: '25px 0', padding: '10px' }}>
      <Grid container spacing={0}>
        {userStats?.map(({ title, body }) => (
          <Grid item md={4} sx={{ textAlign: 'center' }}>
            <CenterAlignedSubtitleBody
              loading={loading}
              title={title}
              body={body}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
export default UserDetailCardStats;
