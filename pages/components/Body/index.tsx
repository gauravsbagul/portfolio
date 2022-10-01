import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2';
import { Experience } from '../Experience';


export const Body = () => {
    return (
        <AppBar position="static" sx={{ padding: '10px' }} style={{ backgroundColor: '#FFF' }}>
            <Toolbar disableGutters >
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
                        <Grid xs={4.5} style={{}} >
                            <Experience />
                        </Grid>
                        <Grid xs={7.5} style={{ backgroundColor: '#AABBCC' }}>
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
