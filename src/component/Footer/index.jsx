import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoFooter from '../../images/logo_white.png';
import { Container,IconButton, Tooltip } from '@mui/material';

const Footer = () => {

    // Replace this with your desired location
    const location = "Dental Destination by Dr. Jannat Chowdhury";

    const openLocation = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <AppBar component="footer" position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, textAlign: 'center' }}>
            <Container maxWidth="xl" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '.75rem',
                color: '#e0e0e0',
                p: "4px"
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <img width={20} src={LogoFooter} alt='Logo' />Dental Destination
                </Box>
                <Box sx={{
                    width: { xs: '200px', sm: '400px', md: '600px' }
                }}>
                    Address: Sector 12 Moylar Mor, Uttara, Dhaka-1230
                    <Tooltip title="View Location">
                    <IconButton sx={{
                        padding:'4px',
                        "& .MuiSvgIcon-root": {
                            // fill: '#fff',
                            width:'.80em',
                            height:'.80em'
                        }
                    }}>
                        <LocationOnIcon onClick={openLocation} />
                    </IconButton>
                    </Tooltip>
                </Box>
                <Box>
                    Copyright © 2023 AmbitionUI
                </Box>
            </Container>
        </AppBar>
    );
}
export default Footer;