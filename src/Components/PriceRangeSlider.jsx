import React, { useState, useEffect } from 'react';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

const PriceRangeSlider = () => {
  const defaultPriceRange = [300, 700]; // Default price range from 300 to 700
  const [selectedPriceRange, setSelectedPriceRange] = useState(defaultPriceRange);
  const [selectedStartValue, setSelectedStartValue] = useState(defaultPriceRange[0]);
  const [selectedEndValue, setSelectedEndValue] = useState(defaultPriceRange[1]);

  const handleSliderChange = (value) => {
    setSelectedPriceRange(value);
  };

  const handleSliderAfterChange = (value) => {
    setSelectedStartValue(value[0]);
    setSelectedEndValue(value[1]);
  };

  useEffect(() => {
    // Update the displayed values when selectedPriceRange changes
    // This is to make sure the displayed values are updated after resetting the slider
    setSelectedStartValue(selectedPriceRange[0]);
    setSelectedEndValue(selectedPriceRange[1]);
  }, [selectedPriceRange]);

  return (
    <Box>
      <Box textAlign="center" mb={2} fontWeight="bold">Price Range</Box>
      <Box textAlign="center" mb={2}>${selectedStartValue} - ${selectedEndValue}</Box>
      <Slider
        value={selectedPriceRange}
        min={300}
        max={5000}
        step={1}
        onChange={handleSliderChange}
        onAfterChange={handleSliderAfterChange}
        colorScheme="red"
        focusThumbOnChange={false}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          fontSize="sm"
          width="24px"
          height="24px"
          boxShadow="0 0 5px rgba(0, 0, 0, 0.1)"
          borderWidth="2px"
          borderColor="red.400"
        />
      </Slider>
    </Box>
  );
};

export default PriceRangeSlider;
