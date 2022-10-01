import { Icon } from '@iconify/react';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import * as React from 'react';

interface ExperienceCardProps {
    key: number | string
    title: string
    duration: string
    companyName: string
    responsibilities: string[]
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ key, title, duration, companyName, responsibilities, }) => (
    <React.Fragment>

        <List sx={{  
                        width: '100%',  
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        '& ul': { padding: 0 }, }}>

            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={companyName}
                    color="text.primary"
                    sx={{ color: '#000' , lineHeight: 0, fontWeight : 'bold'}}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' ,lineHeight: 0 }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {title} 
                            </Typography>
                            {' - '}{duration}
                        </React.Fragment>
                    }
                />
            </ListItem>

            <List
                 aria-label="contacts"
                sx={{
                        width: '100%',  bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        '& ul': { padding: 0 },
                    }}
                subheader={<li />}
            >
                {responsibilities.map((item: string) => {
                    return (
                        <ListItem key={item} disablePadding>
                                <ListItemText primary={`⦿ ${item}`} sx={{ color: '#000' ,lineHeight: 0}} color="text.secondary" />
                         </ListItem>

                    )
                })}

            </List>

        </List>
        <Divider />

    </React.Fragment>
);


