import React from 'react';
import { Box, Flex, Image, Heading, Text, Link } from '@chakra-ui/react';

const SizeChartModal = ({ onClose }) => {
  return (
    <Box
    position="fixed"
    top="50%"
    right="20px" // Adjust the right position as needed
    transform="translateY(-50%)"
    width="60%"
    height="70%"
    p="20px"
    bg="white"
    borderRadius="md"
    boxShadow="md"
    overflow="auto"
      paddingTop="120px"
    >
      {/* Close button */}
      <Box position="absolute" paddingtop="50px" right="10px" cursor="pointer" onClick={onClose}>
        <Text fontSize="lg" fontWeight="bold" color="gray.600">
          X
        </Text>
      </Box>

      {/* Size chart content */}
      <Heading size="lg" mb="10px">
        Size Chart
      </Heading>
      {/* Add your size chart content here */}
      {/* For example, you can use an Image component or any other content */}
      <Image src="https://i.pinimg.com/originals/d9/a5/d3/d9a5d3717ad219e68e5c8c89d7b4e5ea.jpg" alt="Size Chart" />

    </Box>
  );
};

export default SizeChartModal;
