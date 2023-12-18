import React, { useEffect } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import SlideImageOral from '../../images/dentist_5997365.png';
import SlideImagePolishing from '../../images/tooth-cleaning_5997275.png';
import SlideImageFilling from '../../images/dental-filling_5997294.png';
import SlideImageRoot from '../../images/root-canal_5997473.png';
import SlideImageXray from '../../images/x-rays_5997351.png';
import SlideImageDentalCheckups from '../../images/dentist-chair_5997358.png';
import SlideImageConsultation from '../../images/dental-care_5997318.png';
import SlideImageEmergencyCare from '../../images/dental-care_5997493.png';
import SlideImageCosmetic from '../../images/dental-veneer_5997344.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{
        // borderTopLeftRadius: '30%',
        // borderBottomLeftRadius: '30%',
        // borderLeft: '1px solid #1976d2',
        display:'flex',
        alignItems:'center',
        "& img":{
          width:'100%',
          height:'auto'
        }
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default function AutoTabs() {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % 9); // Change 3 to the number of tabs
    }, 3000); // Change tabs every 3000 milliseconds (3 seconds)
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            // display: 'none',
            // borderTop:'10px solid transparent',
            // borderBottom:'10px solid transparent',
            // borderLeft:'10px solid green',
            // backgroundColor:'transparent',
            // height:'0 !important',
            // width:'0',
            right: 'auto'
          },
          "& .MuiTab-root": {
            textAlign: 'start',
          },
          "& .MuiTab-root.Mui-selected": {
            fontWeight: '600',
          },
          "& .MuiTabs-flexContainer": {
            alignItems: 'start',
          },
          minWidth: { xs: '140px', sm: '170px', md: '212px' }
        }}
      >
        <Tab label="Consultation" />
        <Tab label="Emergency Care" />
        <Tab label="Dental Checkups" />
        <Tab label="Scaling & Polishing" />
        <Tab label="Filling" />
        <Tab label="Oral & Maxillofacial Surgery" />
        <Tab label="Root Canal" />
        <Tab label="Digital X-Rays" />
        <Tab label="Cosmetic Dentistry" />
        {/* Add more tabs as needed */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <img src={SlideImageConsultation} alt='Consultation' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src={SlideImageEmergencyCare} alt='Emergency Care' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img src={SlideImageDentalCheckups} alt='Dental Checkups' />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img src={SlideImagePolishing} alt='Scaling & Polishing' />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <img src={SlideImageFilling} alt='Filling' />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <img src={SlideImageOral} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <img src={SlideImageRoot} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <img src={SlideImageXray} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <img src={SlideImageCosmetic} alt='img1' />
      </TabPanel>
      {/* Add more content panels as needed */}
    </Box>
  );
}
