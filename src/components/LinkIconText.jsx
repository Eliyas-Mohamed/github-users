import { Typography, Link, Box, Skeleton } from '@mui/material';
const linkCoverTextStyle = { display: 'flex', alignItems: 'center' };
const LinkIconText = ({ href, text, icon, loading }) => {
  if (loading) {
    return (
      <Box sx={linkCoverTextStyle}>
        <Skeleton
          variant="circular"
          className="darker"
          width={50}
          height={50}
          sx={{ marginRight: '10px' }}
        />
        <Skeleton
          variant="rectangular"
          className="darker"
          width={80}
          height={15}
        />
      </Box>
    );
  }
  if (Boolean(href)) {
    return (
      <Link href={href} sx={linkCoverTextStyle}>
        {icon}
        <Typography variant="body1" component={'span'} gutterBottom>
          {text}
        </Typography>
      </Link>
    );
  } else if (Boolean(text)) {
    return (
      <Box component={'div'} sx={linkCoverTextStyle}>
        {icon}
        <Typography variant="body1" component={'span'} gutterBottom>
          {text}
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box component={'div'} sx={{ ...linkCoverTextStyle, opacity: 0.5 }}>
        {icon}
        <Typography variant="body1" component={'span'} gutterBottom>
          Not Available
        </Typography>
      </Box>
    );
  }
};
export default LinkIconText;
