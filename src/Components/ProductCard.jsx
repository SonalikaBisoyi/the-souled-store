import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
      <Box p="6">
        <Heading size="md" mb="2">
          {product.name}
        </Heading>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Category: {product.category}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Price: ${product.price}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Gender: {product.gender}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
