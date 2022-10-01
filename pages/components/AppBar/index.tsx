import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Unstable_Grid2';
import {Contact} from './Contact'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
 
  return (
    <>
    
    
    <AppBar position="static" sx={{ height: '160px', padding: '20px', backgroundColor:'#fff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Grid container  columnSpacing={{}}>
            <Grid xs={3}>
                <Tooltip title="Gaurav Sunil Bagul">
                  <Avatar alt="Gaurav Sunil Bagul" sx={{ width: 100, height: 100 }} src="https://avatars.githubusercontent.com/u/25247251?s=96&v=4" />
                </Tooltip>
            </Grid>
            <Grid xs={9}>
              
          <Typography
                variant="h5"

            noWrap
             sx={{
              fontFamily: 'roboto',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            Gaurav Sunil Bagul
              </Typography>
              <Typography
            variant="subtitle2"
            noWrap
              sx={{
              fontFamily: 'roboto',
              color: 'hwb(210deg 10% 18%)',
              // textDecoration: 'none',
              fontSize: 15
            }}
          >
                Senior Software Engineer 
 
              </Typography>
               <Typography
            variant="subtitle2"
            noWrap
              sx={{
              fontFamily: 'roboto',
              color: 'hwb(210deg 10% 18%)',
              textDecoration: 'none',
              fontSize: 15
            }}
          >
                 4+ Years of MERN Stack Experience | Led a team of 5 developers | Problem Solver | 4 Star @HackerRank in Problem-solving | Open Source Contributor.

              </Typography>
               

           </Grid>
            <Grid>


              
</Grid>

      


          
              
          </Grid>
        </Toolbar>
      </Container>
      </AppBar>
    
    <Contact/>  
    </>
    
  );
};
