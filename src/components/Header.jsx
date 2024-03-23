import { Box, Typography } from '@mui/material';
const Header = () => (
  <Box component={'header'} sx={{ paddingTop: '50px' }}>
    <Typography
      variant="h5"
      className="text-white"
      component={'h2'}
      gutterBottom
      align="left"
    >
      Github Users
    </Typography>
  </Box>
);

export default Header;
