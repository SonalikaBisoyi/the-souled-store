// import React from 'react';
// import { Box, Image, Heading, Text } from '@chakra-ui/react';

// const ProductCard = ({ product }) => {
//   return (
//     <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
//       <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
//       <Box p="6">
//         <Heading size="sm" mb="2">
//           {product.name}
//         </Heading>
//         <Text fontSize="sm" fontWeight="bold" mb="2">
//           Category: {product.category}
//         </Text>
//         <Text fontSize="sm" fontWeight="bold">
//           Price: ${product.price}
//         </Text>
//         <Text fontSize="sm" fontWeight="bold">
//           Gender: {product.gender}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import { Box, Image, Heading, Text } from '@chakra-ui/react';

// const ProductCard = ({ product }) => {
//   return (
//     <Box
//       maxW="sm"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       p="4"
//       display="flex"
//       flexDirection="column"
//       alignItems="flex-start"
//     >
//       <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
//       <Box p="4" flex="1" width="100%">
//         <Heading size="sm" mb="2" fontWeight="bold" textAlign="left">
//           {product.name}
//         </Heading>
//         <Box borderBottom="1px solid lightgray" width="70%" my="2" />
//         <Text fontSize="sm" fontWeight="bold" mb="1" textAlign="left">
//           Category: {product.category}
//         </Text>
//         <Text fontSize="sm" fontWeight="bold" textAlign="left">
//           ₹ {product.price}
//         </Text>
//         <Text fontSize="sm" fontWeight="bold" textAlign="left">
//           Gender: {product.gender}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;


// import React, { useState } from 'react';
// import { Box, Image as ChakraImage } from '@chakra-ui/react';

// const ProductCard = ({ product }) => {
//   const [showSecondImage, setShowSecondImage] = useState(false);

//   return (
//     <Box
//       maxW="sm"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       p="4"
//       onMouseEnter={() => setShowSecondImage(true)}
//       onMouseLeave={() => setShowSecondImage(false)}
//     >
//       {/* First Image */}
//       <ChakraImage
//         src={product.image}
//         alt={product.name}
//         height="200px"
//         objectFit="cover"
//         opacity={showSecondImage ? '0' : '1'}
//           transition="opacity 0.2s ease-in-out"
//           zIndex="1"
//       />

//       {/* Second Image */}
//       {product.secondImage && (
//         <ChakraImage
//           src={product.secondImage}
//           alt={product.name}
//           height="200px"
//           objectFit="cover"
//            opacity={showSecondImage ? '1' : '0'}
//              transition="opacity 0.2s ease-in-out"
//              position="absolute"
//              top="0"
//             left="0"
//             zIndex="2"
//         />
//       )}

//       <Box p="6">
//         {/* Product Name */}
//         <strong>{product.name}</strong>

//         {/* Product Category */}
//         <p>Category: {product.category}</p>

//         {/* Product Price */}
//         <p>
//           Price: ₹{product.price} {/* Assuming the currency is Indian Rupee */}
//         </p>

//         {/* Product Gender */}
//         <p>Gender: {product.gender}</p>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;

// import React, { useState } from 'react';
// import { Box, Image, Heading, Text } from '@chakra-ui/react';

// const ProductCard = ({ product }) => {
//   const [showSecondImage, setShowSecondImage] = useState(false);

//   return (
//     <Box maxW="1000px" borderWidth="1px" borderRadius="lg" overflow="hidden">
//       <Box
//         onMouseEnter={() => setShowSecondImage(true)}
//         onMouseLeave={() => setShowSecondImage(false)}
//         position="relative"
//       >
//         {/* First Image */}
//         <Image
//           src={product.image}
//           alt={product.name}
//           height="200px"
//           objectFit="cover"
//           opacity={showSecondImage ? '0' : '1'}
//           transition="opacity 0.2s ease-in-out"
//           zIndex="1"
//         />

//         {/* Second Image */}
//         {product.secondImage && (
//           <Image
//             src={product.secondImage}
//             alt={product.name}
//             height="200px"
//             objectFit="cover"
//             opacity={showSecondImage ? '1' : '0'}
//             transition="opacity 0.2s ease-in-out"
//             position="absolute"
//             top="0"
//             left="0"
//             zIndex="2"
//           />
//         )}

//         {/* Product Details */}
//         <Box position="absolute" bottom="0" left="0" right="0" bg="white" p="4" zIndex="3">
//           {/* Product Name */}
//           <Heading size="sm" mb="2">
//             {product.name}
//           </Heading>

//           {/* Product Category */}
//           <Text fontSize="sm" fontWeight="bold" mb="2">
//             Category: {product.category}
//           </Text>

//           {/* Product Price */}
//           <Text fontSize="sm" fontWeight="bold">
//             Price: ₹{product.price} {/* Assuming the currency is Indian Rupee */}
//           </Text>

//           {/* Product Gender */}
//           <Text fontSize="sm" fontWeight="bold">
//             Gender: {product.gender}
//           </Text>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;


// import React, { useState } from 'react';
// import { Box, Image, Heading, Text } from '@chakra-ui/react';

// const ProductCard = ({ product }) => {
//   const [showSecondImage, setShowSecondImage] = useState(false);

//   return (
//     <Box maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
//       <Box
//         onMouseEnter={() => setShowSecondImage(true)}
//         onMouseLeave={() => setShowSecondImage(false)}
//         position="relative"
//       >
//         {/* First Image */}
//         <Image
//           src={product.image}
//           alt={product.name}
//           height="200px"
//           width="100%"
//           objectFit="cover"
//           opacity={showSecondImage ? '0' : '1'}
//           transition="opacity 0.2s ease-in-out"
//           zIndex="1"
//           bg="gray.200" // Add background color
//         />

//         {/* Second Image */}
//         {product.secondImage && (
//           <Image
//             src={product.secondImage}
//             alt={product.name}
//             height="200px"
//             width="100%"
//             objectFit="cover"
//             opacity={showSecondImage ? '1' : '0'}
//             transition="opacity 0.2s ease-in-out"
//             position="absolute"
//             top="0"
//             left="0"
//             zIndex="2"
//             bg="gray.200" // Add background color
//           />
//         )}

//         {/* Product Details */}
//         <Box position="absolute" bottom="0" left="0" right="0" bg="white" p="4" zIndex="3">
//           {/* Product Name */}
//           <Heading size="sm" mb="2">
//             {product.name}
//           </Heading>

//           {/* Product Category */}
//           <Text fontSize="sm" fontWeight="bold" mb="2">
//             Category: {product.category}
//           </Text>

//           {/* Product Price */}
//           <Text fontSize="sm" fontWeight="bold">
//             Price: ₹{product.price} {/* Assuming the currency is Indian Rupee */}
//           </Text>

//           {/* Product Gender */}
//           <Text fontSize="sm" fontWeight="bold">
//             Gender: {product.gender}
//           </Text>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;
import React, { useState } from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';




const ProductCard = ({ product }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  return (
    <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" height="350px" mb="50px" mx="30px">
      <Box
        onMouseEnter={() => setShowSecondImage(true)}
        onMouseLeave={() => setShowSecondImage(false)}
        position="relative"
        height="200px"
        overflow="hidden"
        _hover={{ transform: "scale(1.05)" }}
      >
        {/* First Product's Image */}
        <Image
          src={product.image}
          alt={product.name}
          height="100%"
          width="100%"
          objectFit="cover"
          opacity={showSecondImage ? '0' : '1'}
          transition="opacity 0.2s ease-in-out"
          zIndex="2" // Increased zIndex to make sure it's on top of the second image
          bg="gray.200" // Add background color
        />

        {/* Second Product's Image */}
        {product.secondImage && (       
          <Image
            src={product.secondImage}
            alt={product.name}
            height="100%"
            width="100%"
            objectFit="cover"
            opacity={showSecondImage ? '1' : '0'}
            transition="opacity 0.2s ease-in-out"
            position="absolute"
            top="0"
            left="0"
            zIndex="1" // Decreased zIndex to make sure it's below the first image
            bg="gray.200" // Add background color
          />
        )}
      </Box>

      {/* Product Details */}
      <Box bg="white" p="4" height="40px" display="flex" flexDirection="column" justifyContent="space-between">
        {/* Product Name */}
        <Box>
          <Heading size="sm" mb="2" borderBottom="1px solid lightgray" >
            {product.name}
          </Heading>

          {/* Product Category */}
          <Text fontSize="sm" fontWeight="bold" mb="2">
            Category: {product.category}
          </Text>
          <Text fontSize="sm" fontWeight="bold">
          Price: ₹{product.price}
        </Text>
        </Box>

  
        {/* <Text fontSize="sm" fontWeight="bold">
          Price: ₹{product.price}
        </Text> */}
      </Box>
    </Box>
  );
};

export default ProductCard;







