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
            background: 'radial-gradient(#bac5d000, #39759c5e)',
            height: 'calc(100vh - 70px)',
            // backgroundImage: `url(${SlideImageOne})`,
        }}>
            <Container sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column',
                        width:'80%',
                    }}>
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