import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {ExperienceCard} from './ExperienceCard'
import { Typography } from '@mui/material';
const steps = [
    {
        key: 1,
        title: 'Senior Software Engineer',
        companyName: 'Great Software Laboratory',
        duration: '8/21-present',
        responsibilities: [
            'MERN Stack Developer',
            'Developing new user-facing features using React JS',
            'Troubleshoot, debug and upgrade existing software',
            'Optimize applications for maximum speed and scalability'
        ],
    },
    {
        key: 2,
        title: 'Senior Software Engineer',
        companyName: 'NewT Global',
        duration: '12/20-8/21',
        responsibilities: [
            'React Native, Cross-Platform Application.',
            'NEXT JS, Responsive Web Application.',
            'Led the respective pod.',
            'Troubleshoot, debug and upgrade existing software.'
        ],    
    },
    {
        key: 3,
        title: 'Software Developer',
        companyName: 'Winjit Technologies',
        duration: '8/18-11/20',
        responsibilities: [
            'Code, test, and operate React JS.',
            'Build customer-facing UI and Front-end services.',
            'Define code architecture decisions to support ahigh-performance and scalable product.',
            // ''
        ],
    },
];

export const Experience = () => {
    return (
        <Box sx={{ width: '100%' }}>
             <Typography
                                sx={{ display: 'inline' ,lineHeight: 0 , color:'#455aa3'}}
                                component="span"
                                variant="h5"
                                color="text.primary"
                            >
                                Work Experience 
                            </Typography>
            {steps.map((item) => (
                     <React.Fragment key={item.key} >
                        <ExperienceCard {...item}/>
                     </React.Fragment>
                 ))}
         </Box>
    );
}
