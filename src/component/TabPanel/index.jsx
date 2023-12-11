import React, { useEffect } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

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
        borderTopLeftRadius:'30%',
        borderBottomLeftRadius:'30%', 
        borderLeft:'1px solid #1976d2',
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
      setValue((prevValue) => (prevValue + 1) % 3); // Change 3 to the number of tabs
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
            "& .MuiTabs-indicator":{
                display:'none'
            },
            alignItems:'start'
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
        Item One Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Content
      </TabPanel>
      {/* Add more content panels as needed */}
    </Box>
  );
}
