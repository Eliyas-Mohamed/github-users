import { Skeleton, Typography, Box } from '@mui/material';
const CenterAlignedSubtitleBody = ({ loading, title, subtitle }) => {
  if (loading) {
    return (
      <Box
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ marginBottom: '25px' }}
          width={70}
          height={15}
          component={'div'}
        />

        <Skeleton
          variant="rectangular"
          sx={{ marginBottom: '25px' }}
          width={20}
          height={15}
          component={'div'}
        />
      </Box>
    );
  } else {
    return (
      <>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </>
    );
  }
};
export default CenterAlignedSubtitleBody;
