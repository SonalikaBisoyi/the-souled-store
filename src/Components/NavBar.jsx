import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
 
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import logos from "../images/logos.png"
import {Link} from "react-router-dom"
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa' 
import {CiShoppingCart} from 'react-icons/ci'
import { useContext } from 'react';
import {useCart} from '../Context/CartContext';

export default function WithSubnavigation() {
  const { cartCount } = useCart();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box >
      <Flex
          padding="20px"
          position={"fixed"}
          top="40px"
          width="100%"
          zIndex={"999"}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        
        >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Link to={"/"}><img style={{ borderRadius:"50%"}}  src={'https://th.bing.com/th?id=OIP.YpMd_DVK4Lh7uPL41HR2_QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'} alt="logo" width="80px" height="50px"/></Link>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
         <Box>

         <Input  type={"text"} placeholder={`SEARCH                      🔍`} borderRadius="20px"></Input>
         </Box>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={3}
           alignItems="center"
          >
          
        <Link to={'/login'} alignItems="center" >
        <Button
        marginTop="5px"
            as={'a'}
            fontSize={'xl'}
            fontWeight={400}
            variant={'link'}
            to={'/login'}
             alignItems="center"
            >
          <Button _hover={{bg:"white"}} backgroundColor={"white"}  color={"red"} marginLeft={2} fontWeight="bold" isD></Button> <FaRegUser/> 
          
          </Button>
        </Link>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'xl'}
            fontWeight={600}
            color={'black'}
            bg={"white"}
            href={'#'}
            _hover={{
              bg: '#e11b23',
              color:"white"
            }}>
             
             <AiOutlineHeart/>
          </Button>
          <Link to="/cart" alignItems="center" mr={4}>
          <Button as="a" fontSize="xl" fontWeight={400} variant="link" href="#">
            <CiShoppingCart />
            <span style={{ marginBottom: "20px", color: "red", borderRadius: "60%" }}>
              {cartCount}
            </span>
          </Button>
        </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack style={{  alignItems:"center"}} direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('#e11b23', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#e11b23' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} marginTop={'120px'}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS= [
 
  {
    label: 'TOP WEAR',
    children: [
      {
        label: 'T-Shirt',
        
        href: '/topwear/t-shirt',
      },
      {
        label: 'Oversized T-shirt',
        
        href: '/topwear/oversizedt-shirt',
      },
      {
        label: 'Oversized Full Sleeves T-shirt ',
        
        href: '/topwear/oversizedfullsleevest-shirt',
      },
      {
        label: 'Full Sleeves T-shirt ',
        
        href: '/topwear/fullsleevest-shirt',
      },
      {
        label: 'Shirt',
        
        href: '/topwear/shirt',
      },
      {
        label: 'Polos',
        
        href: '/topwear/polos',
      },
      {
        label: 'Hoodies Jackets',
        
        href: '/topwear/hoodiesjacket',
      },
      {
        label: 'SweatShirt  Sweaters',
        
        href: '/topwear/sweatshirtsweater',
      },
      {
        label: 'Co-ord Sets',
        
        href: '/topwear/coordset',
      },
      {
        label: 'Drop-cut T-Shirt',
        
        href: '/topwear/drop-cutt-shirt',
      },
      {
        label: 'Vests',
        
        href: '/topwear/vests',
      },
      
    ],
  },

  {
    label: 'BOTTOMWEAR',
    children: [
      {
        label: 'Joggers',
        
        href: '/bottomwear/joggers',
      },
      {
        label: 'Freestyle Leggings ',
        
        href: '/bottomwear/leggings',
      },
      {
        label: 'Innerwear ',
        
        href: '/bottomwear/innerwear',
      },
      {
        label: 'Shorts',
        
        href: '/bottomwear/shorts',
      },
      {
        label: 'Pajamas',
        
        href: '/bottomwear/pajamas',
      }
      
    ],

  },

  {
    label: 'BASICS',
    href:'/basics'
    //children: [
      // {
      //   label: 'Mens',
      //   subLabel: 'Shop By Mens Category',
      //   href: '/mensproducts',
      // },
      // {
      //   label: 'Womens',
      //   subLabel: 'Shop By Womens Category',
      //   href: '/womensproducts',
      // },
      // {
      //   label: 'Kids',
      //   subLabel: 'Shop By Kids Category',
      //   href: '/kidsproducts',
      // },
  //  ],
  },
  {
    label: 'COLLECTIONS',
    children: [
      {
        label: 'New Arrivals',
        
        href: '/collections/newarrivals',
      },
      {
        label: 'Active Wears',
        
        href: '/collections/activewears',
      },
      {
        label: 'Best Sellers',
        
        href: '/collections/bestsellers',
      },
      {
        label: 'Hottest Deals',
        
        href: '/collections/hottestdeals',
      },
      
    ],

  },
  {
    label: 'ACCESSORIES',
    children: [
      {
        label: 'Shoes',
        
        href: '/accessories/shoes',
      },
      {
        label: 'Perfume',
        
        href: '/accessories/perfumes',
      },
      {
        label: 'BackPacks',
        
        href: '/accessories/backpacks',
      },
      {
        label: 'Socks',
        
        href: '/accessories/socks',
      }
      
    ],

  },
  
  {
    label: 'MEMBERSHIP',
    href:'/membership'

  },
  {
    label: 'CONTACT',
    

  },
];
