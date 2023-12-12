import React, { useEffect } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import SlideImageOne from '../../images/tooth_5997267.png';
import SlideImageTwo from '../../images/tooth-cleaning_5997275.png';
import SlideImageThree from '../../images/dental-filling_5997294.png';

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
        borderLeft: '1px solid #1976d2',
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
      setValue((prevValue) => (prevValue + 1) % 6); // Change 3 to the number of tabs
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
            // display: 'none'
          },
          "& .MuiTab-root.Mui-selected":{
            fontWeight:'600',
          },
          alignItems: 'start',
          minWidth:'170px'
        }}
      >
        <Tab label="Oral & Maxillofacial Surgery" />
        <Tab label="Scaling & Polishing" />
        <Tab label="Dental Checkups" />
        <Tab label="Consultation" />
        <Tab label="Filling" />
        <Tab label="Root Canal" />
        <Tab label="Digital X-Rays" />
        <Tab label="Emergency Care" />
        <Tab label="Cosmetic Dentistry" />
        {/* Add more tabs as needed */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <img width="400px" src={SlideImageTwo} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img width="400px" src={SlideImageOne} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img width="400px" src={SlideImageThree} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img width="400px" src={SlideImageTwo} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <img width="400px" src={SlideImageTwo} alt='img1' />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <img width="400px" src={SlideImageTwo} alt='img1' />
      </TabPanel>
      {/* Add more content panels as needed */}
    </Box>
  );
}
