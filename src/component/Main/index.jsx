import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageSlider from '../ImageSlider';
import TabPanel from '../TabPanel';
const Main = () => {

    // Replace this with your desired location
    const location = "Dental Destination by Dr. Jannat Chowdhury";

    const openLocation = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <Box sx={{
            background: '#f4f4f4',
            height: 'calc(100vh - 70px)',
            backgroundImage:`url(${process.env.PUBLIC_URL}/slide_img_1.jpg)`,
        }}>
            <Container sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            For your any kind of dental care
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <TextField size='small' type='text' id="outlined-basic" label="Name" variant="outlined" />
                            <TextField size='small' type='number' id="outlined-basic" label="Phone Number" variant="outlined" />
                            <TextField size='small' type='text' id="outlined-basic" label="Problem" variant="outlined" />
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Appointment
                            </Button>
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<LocationOnIcon />} // Optional icon
                                onClick={openLocation}
                            >
                                Show Location
                            </Button>
                            <Typography>
                                dentaldestinationbd@gmail.com 01327429987
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TabPanel />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Main;