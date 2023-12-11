import React, { useEffect } from 'react';
import { Box, Paper, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const images = [
  {
    label: 'Image 1',
    imgPath: 'https://source.unsplash.com/random/?city',
  },
  {
    label: 'Image 2',
    imgPath: 'https://source.unsplash.com/random/?city',
  },
  // Add more images as needed
];

const ImageSlider = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => {
      clearInterval(interval);
    };
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <div>{images[activeStep].label}</div>
      </Paper>
      <Box
        sx={{
          height: 255,
          maxWidth: 400,
          width: '100%',
          p: 2,
          backgroundImage: `url(${images[activeStep].imgPath})`,
          backgroundSize: 'cover',
        }}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<KeyboardArrowRight onClick={handleNext} />}
        backButton={<KeyboardArrowLeft onClick={handleBack} />}
      />
    </Box>
  );
};

export default ImageSlider;
