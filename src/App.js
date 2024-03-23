import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

import './global.scss';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '../node_modules/@mui/material/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#141c30',
        light: '#141c30',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#ffffff',
            MuiLink: {
              styleOverrides: {
                root: {
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'none',
                  },
                },
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#1f2a48;',
          },
        },
      },
      // #8A94AC

      MuiLink: {
        styleOverrides: {
          root: {
            color: '#007AF2',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#141c30',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#ffffff',
            marginRight: '10px',
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          img: {
            objectFit: 'fill',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            backgroundColor: '#1f2a48;',
            transition: 'ease-in 0.5s',
            ':hover': {
              border: '1px solid #ffffff',
            },
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            backgroundColor: '#1f2a48',
            '&.darker': {
              backgroundColor: '#141c30',
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<UserList />} />
            <Route path="/userdetail/:userName" element={<UserDetail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
