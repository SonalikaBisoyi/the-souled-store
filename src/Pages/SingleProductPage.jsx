import React,{useState,useEffect,useContext} from 'react';
import { Box, Flex, Image, Heading, Text,Link ,Button,Select, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import SizeChartModal from '../Components/SizeChartModal';
import SizeNotAvailableModal from '../Components/SizeNotAvailableModal';
import {useCart} from '../Context/CartContext'; 

const SingleProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [isSizeNotAvailableOpen, setSizeNotAvailableOpen] = useState(false);
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
        <Box flex="1"  textAlign="left">
          <Heading size="lg" mb="2">
            {product.name}
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
           ₹{product.price}
          </Text>
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
            Quantity:
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
        <Accordion mt="20px" defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Product Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>{product.details}</Text>
                
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Product Description
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               
                <Text>{product.description}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProductPage;
