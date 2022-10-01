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
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon } from '@iconify/react';

import Paper from '@mui/material/Paper';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export const Contact = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    return (
        <AppBar position="static" sx={{ padding: '20px' }} style={{ backgroundColor: '#455aa3' }}>
            <Toolbar disableGutters >
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} >

                            <Grid xs={6}>
                                <Link href="mailto:gauravsbagul@gmail.com" color="#fff" underline="hover">
                                    <Icon icon="eva:email-outline" />
                                    {'gauravsbagul@gmail.com'}
                                </Link>
                            </Grid>
                            <Grid xs={3}>
                                <Link color="#fff" underline="none">
                                    <Icon icon="akar-icons:phone" />
                                    {'9604374093'}
                                </Link>
                            </Grid>
                            <Grid xs={3}>
                                <Icon icon="akar-icons:location" />
                                {'Pune, Maharashtra, India'}
                            </Grid>

                            <Grid xs={6}>
                                <Link href="https://www.linkedin.com/in/gauravsbagul/" color="#fff" underline="hover">
                                    <Icon icon="akar-icons:linkedin-box-fill" />
                                    {'https://www.linkedin.com/in/gauravsbagul/'}
                                </Link>
                            </Grid>
                            <Grid xs={6}>
                                <Link href="https://github.com/gauravsbagul" color="#fff" underline="hover">
                                    <Icon icon="akar-icons:github-fill" />
                                    {'https://github.com/gauravsbagul'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid xs={6}>
                            <Link href="#" color="#fff" underline="none" >
                                <Icon icon="bi:skype" />
                                {'live:304339d205ca2df8'}
                            </Link>
                        </Grid>
                        <Grid xs={6}>
                            <Link href="#" color="#fff" underline="hover">
                                <Icon icon="cib:stackoverflow" />

                                {'https://stackoverflow.com/users/8153595/gauravsbagul'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
