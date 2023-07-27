//home matlb mens cateogry
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, useBreakpointValue,Grid,Text,Image} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { AiFillCrown } from "react-icons/ai";
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import silder1 from "../images/membership1.png"
import silder2 from "../images/membership2.png"
import silder3 from "../images/membership3.png"
import silder4 from "../images/membership4.png"

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


const Membership = () => {
    const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
  
    // These are the images used in the slide
    const cards = [
      {silder1},
      {silder2},
       {silder3},
    ];
  



  return (
    <div>
    <Box
      position={'relative'}
      height={'500px'}
      // width={'98%'}
      overflow={'hidden'}
      margin="auto"
      marginTop={150}
      width={{base:"60%" , sm:"90%" , md:"90%" , lg:'98%'}}
      >
      
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
       
          <Box
           
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={silder1}
            width={{base:"300px" ,md:"450px" , lg:"80%" , xl:"100%"}}
           
          />
           <Box
            
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={silder2}
          />
             <Box
            
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={silder3}
          />
           <Box
            
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={silder4}
          />
      </Slider>
    </Box>
    <Box>
        <Text fontWeight={"semibold"} fontSize="4xl" textDecorationLine={'underline'}>Membership Benifits</Text>
    <Grid columns={2} spacing={10}gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(2,1fr)"}}  margin={'80px'} gap="30px">
  
  
  <Box display={'flex'} >
    <Image src={'https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-01.png?format=webp&w=200&dpr=1.5'}height={'150px'}></Image>
    <div>
  <Text fontWeight={"semibold"} fontSize="2xl" textDecorationLine={'underline'} margin={'20px'}>BIG DISCOUNTS</Text>
  <Text fontSize="xl">Save big on ALL products every day. Why wait for a sale?</Text>
  </div>
   </Box>
  
  
  
  <Box display={'flex'}  >
    <Image src={'https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-02.png?format=webp&w=200&dpr=1.5'} height={'150px'}></Image>
    <div>
  <Text fontWeight={"semibold"} fontSize="2xl" textDecorationLine={'underline'} margin={'20px'}>EARLY ACCESS</Text>
  <Text fontSize="xl">Get your hands on select products and designs before others do.</Text>
  </div>
    </Box>



  <Box display={'flex'}  >
  <Image src={'https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-03.png?format=webp&w=200&dpr=1.5'} height={'150px'}></Image>
  <div>
  <Text fontWeight={"semibold"} fontSize="2xl" textDecorationLine={'underline'} margin={'20px'}>FREE DELIVERY</Text>
  <Text fontSize="xl">Our shipping charges are on us.</Text>
  </div>
  </Box>
  
  
  
  <Box display={'flex'}  >
  <Image src={'https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-04.png?format=webp&w=200&dpr=1.5'}height={'150px'}></Image>
  <div>
  <Text fontWeight={"semibold"} fontSize="2xl" textDecorationLine={'underline'} margin={'20px'}>PRIORITISED SHIPPING</Text>
  <Text fontSize="xl">We ship your orders before everyone else’s.</Text>
  </div>
  </Box>
</Grid>
</Box>
    </div>
  );
}

export default Membership;
