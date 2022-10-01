import Paper from '@mui/material/Paper';
import * as React from 'react';
import { useState } from 'react';

import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import moduleName from 'module';
import { ResponsiveAppBar } from '../AppBar'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Body } from '../Body'


interface BoxMap {
    [key: string]: { top: number; left: number; component?: ReactJSXElement | null | string }
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



export const ResumePaper = () => {

    const [boxes, setBoxes] = useState<BoxMap>({
        a: { top: 0, left: 0, component: <Chip avatar={<Avatar>B</Avatar>} label={'CSS'} color="success" /> },
        b: { top: 180, left: 20, component: <Chip avatar={<Avatar>A</Avatar>} label={'HTML'} color="success" /> },
    })
    return (
        <Paper variant="outlined" square sx={{
            bgcolor: 'background.paper',
            p: 2,
            height: '100%',
            width: '100%',
        }} style={{ backgroundColor: 'red' }}>
            <ResponsiveAppBar />
            <Body />



            {/* <Chip avatar={<Avatar>A</Avatar>} label={'HTML'} color="success" />
            <Chip avatar={<Avatar>A</Avatar>} label={'HTML'} color="success" />
            <Chip avatar={<Avatar>A</Avatar>} label={'HTML'} color="success" />
            <Chip avatar={<Avatar>A</Avatar>} label={'HTML'} color="success" /> */}
        </Paper>
    );
}
