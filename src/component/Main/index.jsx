import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageSlider from '../ImageSlider';
import TabPanel from '../TabPanel';

import SlideImageOne from '../../images/dental-care_5997318.png';
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '80%',
                    }}>
                        <Typography sx={{
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            color: '#004670',
                            mb: 1,
                        }}>
                            For Your Any Kind of Dental Care
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            {/* <TextField size='small' type='text' id="outlined-basic" label="Name" variant="outlined" />
                            <TextField size='small' type='number' id="outlined-basic" label="Phone Number" variant="outlined" />
                            <TextField size='small' type='text' id="outlined-basic" label="Problem" variant="outlined" />
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Appointment
                            </Button> */}
                            <Button variant="contained" href="tel:+8801327429987" sx={{ textAlign: 'center', lineHeight: { xs: '1.2', sm: '1.75' } }}>
                                {/* <Typography component="span" textAlign="center">For Appointment</Typography> */}
                                Call Us: +8801327429987
                            </Button>
                            <Typography textAlign="center" fontWeight="600">Or Visit</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<LocationOnIcon />} // Optional icon
                                onClick={openLocation}
                            >
                                Our Location
                            </Button>
                            <Box sx={{
                                "& .MuiTypography-root":{
                                    fontSize:'.85rem',
                                    color:'#626262',
                                }
                            }}>
                                <Typography><strong>Address:</strong> Sector 12 Moylar Mor, Uttara, Dhaka-1230</Typography>
                                <Typography>
                                    <strong>Email:</strong> dentaldestinationbd@gmail.com 01327429987
                                </Typography>
                                <Typography>
                                    <strong>Phone:</strong> 01327429987
                                </Typography>
                            </Box>
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