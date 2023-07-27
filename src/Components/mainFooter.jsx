
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function MainFooter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        
        <Stack align={'flex-start'} >
        <Box color="red" ><ListHeader >Need Help</ListHeader></Box>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Track Order</Link>
            <Link href={'#'}>Return & Refunds</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>My Account</Link>
          </Stack>


          <Stack align={'flex-start'}>
            <Box color="red"><ListHeader>Company</ListHeader></Box>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Stores Near Me</Link>
            <Link href={'#'}>Community initiatives</Link>
            <Link href={'#'}>Souled Army</Link>
          </Stack>

          <Stack align={'flex-start'}>
          <Box color="red" > <ListHeader>More Info</ListHeader></Box>
            <Link href={'#'}>T&C</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Sitemap</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>SOULED STORE APP</ListHeader>
              <Image src="https://thumbs.dreamstime.com/b/app-store-155321571.jpg" w={120}/>
          </Stack>
        </SimpleGrid>
      </Container>
      <Accordion allowMultiple > 
  <AccordionItem marginLeft='25px' border='1px solid black'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color="red" >
          NAVIGATION LINK
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack align={'flex-start'} >
        <Box color="red" ><ListHeader >KIDS</ListHeader></Box>
           <Text>
Boys T-Shirts|Oversized T-Shirts|Hoodies|Sweatshirts|Joggers|Shorts|Girls T-Shirts|Tops|Dresses|Hoodies|Joggers|Vacation Wear</Text>
          </Stack>


          <Stack align={'flex-start'}>
            <Box color="red"><ListHeader>MEN</ListHeader></Box>
            <Text>
T-Shirts|Oversized T-Shirts|Shirts|Polos|Windcheaters|Tank Tops & VestsDrop-Cut |T-ShirtsCo-ord |SetsOversized Full Sleeve T-Shirts|Hoodies & Jackets|Sweatshirts & Sweaters|Jeans|Cotton Pants|Cargos|Joggers|Shorts|Innerwear & Boxers|Pajamas|Shoes|Windcheaters & Umbrellas|Perfumes|Socks|Backpacks|Caps|Basic|sNew Arrivals|Best Sellers|Streetwear
|Superheroes|Hottest Deals|Supima|Activewear|Tie-Dye
           </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Box color="red"><ListHeader>WOMEN</ListHeader></Box>
            <Text>
T-Shirts|Oversized T-Shirts|Shirts|Polos|Windcheaters|Tank Tops & VestsDrop-Cut |T-ShirtsCo-ord |SetsOversized Full Sleeve T-Shirts|Hoodies & Jackets|Sweatshirts & Sweaters|Jeans|Cotton Pants|Cargos|Joggers|Shorts|Innerwear & Boxers|Pajamas|Shoes|Windcheaters & Umbrellas|Perfumes|Socks|Backpacks|Caps|Basic|sNew Arrivals|Best Sellers|Streetwear
|Superheroes|Hottest Deals|Supima|Activewear|Tie-Dye|Hoodies & Jackets|Sweatshirts & Sweaters|Jeans|Cotton Pants
           </Text>
          </Stack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem marginLeft='25px' border='1px solid black'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color="red">
          WHO WE ARE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


</Accordion>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'right'}
          align={{ md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
          <ListHeader>Follow Us:</ListHeader>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'center'}
          align={{ md: 'center' }}>
          <Text>© 2023 Tech Hive. All rights reserved</Text>
         
        </Container>
      </Box>

    </Box>
  );
}