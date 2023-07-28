import React,{useState,useEffect,useContext} from 'react';
import { Box, Flex, Image, Heading, Text,Link ,Button,Select} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import SizeChartModal from '../Components/SizeChartModal';
import SizeNotAvailableModal from '../Components/SizeNotAvailableModal';
import {useCart} from '../Context/CartContext'; 
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';

const SingleProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [isSizeNotAvailableOpen, setSizeNotAvailableOpen] = useState(false);
    //const { setCartCount } = useContext(CartContext);
    //const [showAlert, setShowAlert] = useState(false);
    //const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();


    useEffect(() => {
        // Fetch the product details using the productId
        const selectedProduct = data.products.find((product) => product.id === Number(productId));
        setProduct(selectedProduct);
      }, [productId]);
    
      if (!product) {
        return <div>Loading...</div>;
      }  
      const handleSizeChartToggle = () => {
        setIsSizeChartOpen((prev) => !prev);
      };
      
      const handleSizeNotAvailableToggle = () => {
        setSizeNotAvailableOpen((prev) => !prev);
      };
      const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
      };
      const handleAddToCart = () => {
        addToCart(product, quantity);
        // Show an alert that the item has been added to the cart
        alert('Item added to cart!');
      };
    
    
    
  // return (
  //   <Flex p="20px" gap="20px">
  //     {/* Left side - Product Images */}
  //     <Box flex="1">
  //       <Image src={product.image} alt={product.name} />
  //       {/* Add additional images of the product here if available */}
  //       {product.secondImage && <Image src={product.secondImage} alt={product.name} />}
  //     </Box>

  //     {/* Right side - Product Details */}
  //     <Box flex="1">
  //       <Heading size="lg" mb="2">
  //         {product.name}
  //       </Heading>
  //       <Text fontSize="xl" fontWeight="bold">
  //         {product.price}
  //       </Text>
  //       <Text fontSize="md" color="gray.600">
  //         {product.description}
  //       </Text>

  //       {/* Add other product details like Material & Care, Sizes, etc. here */}
  //       {/* For example, if you have product sizes, you can display them as: */}
  //       <Box mt="20px">
  //         <Text fontSize="lg" fontWeight="bold" mb="2">
  //           Sizes:
  //         </Text>
  //         {product.sizes.map((size) => (
  //           <Box key={size} display="inline-block" px="8px" py="4px" borderRadius="md" bg="gray.200" mr="10px">
  //             {size}
  //           </Box>
  //         ))}
  //       </Box>

  //       {/* Add the rest of the product details here */}
  //     </Box>
  //   </Flex>
  // );
  return (
    <Box p="20px" paddingTop="180px"> {/* Add paddingTop to push the content down */}
      <Flex gap="20px">
        {/* Left side - Product Images */}
        <Box flex="1">
          <Image src={product.image} alt={product.name} />
          {/* Add additional images of the product here if available */}
          {product.secondImage && <Image src={product.secondImage} alt={product.name} />}
        </Box>

        {/* Right side - Product Details */}
        <Box flex="1">
          <Heading size="lg" mb="2">
            {product.name}
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
           ₹{product.price}
          </Text>
          <Text fontSize="md" color="gray.600">
            {product.description}
          </Text>

          {/* Add other product details like Material & Care, Sizes, etc. here */}
          {/* For example, if you have product sizes, you can display them as: */}
           {/* Please select a size */}
           <Box mt="20px">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Please select a size:
        </Text>
        {product.sizes.map((size) => (
          <Box
            key={size}
            display="inline-block"
            px="8px"
            py="4px"
            borderRadius="md"
            bg="gray.200"
            mr="10px"
          >
            {size}
          </Box>
        ))}
      </Box>

      {/* Size Chart */}
      <Box mt="20px">
        <Link onClick={handleSizeChartToggle} color="blue.500" cursor="pointer">
          Size Chart
        </Link>
        {isSizeChartOpen && <SizeChartModal onClose={handleSizeChartToggle} />}
      </Box>
      <Box mt="20px">
        <Link onClick={handleSizeNotAvailableToggle} color="blue.500" cursor="pointer">
          Size Not Available, Notify Me
        </Link>
        {isSizeNotAvailableOpen && (
          <SizeNotAvailableModal sizes={product.sizes} onClose={handleSizeNotAvailableToggle} />
        )}
      </Box>
      <Box mt="20px">
          <Text fontSize="lg" fontWeight="bold" mb="2">
            Sizes:
          </Text>
          <Select value={quantity} onChange={handleQuantityChange} width="100px">
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Select>
        </Box>
        <Flex mt="20px" alignItems="center">
          <Button colorScheme="blue" onClick={handleAddToCart} mr="10px">
            Add to Cart
          </Button>
          <Button colorScheme="green">Add to Wishlist</Button>
        </Flex>



          {/* Add the rest of the product details here */}
        </Box>
      </Flex>
      {/* {isSizeChartOpen && (
        <Box position="fixed" left="0" top="0" bottom="0" width="30%" bg="white" padding="20px">
          {/* Add your size chart content here }
          {/* For example, a simple text for demonstration purposes }
          <Text fontWeight="bold" fontSize="lg">Size Chart</Text>
          <Text mt="10px">
            This is the size chart. Add your size chart content here.
            You can style it according to your needs.
          </Text>
        </Box>
      )} */}
    </Box>
  );
};

export default SingleProductPage;
