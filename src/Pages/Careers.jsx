 import React from 'react';
import{Button, Center, Container,HStack,Heading,SimpleGrid,Text, VStack} from '@chakra-ui/react';
//import { SimpleGrid, HStack, Image, Box } from '@chakra-ui/react';
import { Box, Flex, Image} from '@chakra-ui/react';



export default function Careers() {
  return (
   <>
        <Container as="div" bg="teal.600" maxWidth="100%" height="150px" >
            <Center>
                <Text color="white"  textAlign="center" paddingTop="20px">
                    We're a bunch of nerdy, like-minded people who do what they love and love what they do. We believe that Mondays should be as fun as Fridays.<br/>
        We're always on the lookout for souls to join our ranks and add to the fun and creativity! If you think you will fit just right in, apply right away!
                </Text>
            </Center>
            <Center>
                <Button colorScheme="white" mt={4} bg="white" color="teal.600" border="1px solid black">
                View Jobs
            </Button>
        </Center>
        </Container> 
        <Container maxWidth="100%">
            <Heading textAlign="center" fontSize="2xl" color="teal.600" pt="20px">
                Our Core Values
            </Heading>
            <Text pt="30px">
                One thing that we've tried to keep consistent through all these years is our core set of values and beliefs. They have helped us get to where we are today, and they guide us as we grow. We inculcate<br/> these values in everything we do - from the littlest of things to the biggest of decisions.
            </Text>
            <SimpleGrid columns={2} border="none" gap={0} pt="20px">
                <Box bg="white" shadow="md" borderRadius="md" p={4}>
                    <Flex alignItems="center">
                        <Image src="https://tss-static-images.gumlet.io/career-revamp/think%20different.svg" alt="Idea" width="72px" height="87px" borderRadius="md" mr={4} />
                        <Text color="gray.600">
                           Think Different<br/>
                           Random ideas, new suggestions, and challenging the norm are always welcome.
                        </Text>
                    </Flex>
                </Box>
                <Box bg="white" shadow="md" borderRadius="md" p={4}>
                    <Flex alignItems="center">
                        <Image src="https://tss-static-images.gumlet.io/career-revamp/ownership%20of%20work.svg" alt="Hand" width="72px" height="75px" borderRadius="md" mr={4} />
                        <Text color="gray.600">
                            Stay Weird, Be Yourself <br/>
                            The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.
                        </Text>
                    </Flex>
                </Box>
                <Box bg="white" shadow="md" borderRadius="md" p={4}>
                    <Flex alignItems="center">
                        <Image src="https://tss-static-images.gumlet.io/career-revamp/respect%20everyone.svg" alt="People" width="72px" height="52px" borderRadius="md" mr={4} />
                        <Text color="gray.600">
                            Respect Everyone <br/>
                            Treat others how you'd like to be treated, and you have a happy family.
                        </Text>
                    </Flex>
                </Box>
                <Box bg="white" shadow="md" borderRadius="md" p={4}>
                    <Flex alignItems="center">
                        <Image src="https://tss-static-images.gumlet.io/career-revamp/Growth%20and%20learning.svg" alt="Growth" width="72px" height="65px" borderRadius="md" mr={4} />
                        <Text color="gray.600">
                            Ownership Of Work <br/>
                            Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.
                        </Text>
                    </Flex>
                </Box>
                <Box bg="white" shadow="md" borderRadius="md" p={4}>
                    <Flex alignItems="center">
                        <Image src="https://tss-static-images.gumlet.io/career-revamp/stay%20weird.svg" alt="Weird" width="72px" height="83px" borderRadius="md" mr={4} />
                        <Text color="gray.600">
                            Take Initiative <br/>
                            Want to change something? Change it. See something that needs fixing? Fix it.
                        </Text>
                    </Flex>
                </Box>
                <Box bg="white" shadow="md" borderRadius="md" p={4}>
                    <Flex alignItems="center">
                        <Image src="https://tss-static-images.gumlet.io/career-revamp/take%20initiative.svg" alt="Point" width="72px" height="95px" borderRadius="md" mr={4} />
                        <Text color="gray.600">
                            Growth & Learning <br/>
                            Work with various teams and departments and learn something new every day.
                        </Text>
                    </Flex>
                </Box>
            </SimpleGrid>
            
           
        </Container>
        <Container maxWidth="100%" bgColor="gray.200">
            <Heading textAlign="center" fontSize="2xl" color="teal.600" pt="20px">
                WHY WORK WITH US ?
            </Heading>
            <HStack justifyContent="space-around" pt="35px" pb="35px">
                <VStack spacing={4}>
                     <Box>
                        <Image src="https://prod-img.thesouledstore.com/public/theSoul/storage/career-revamp/union9.svg?format=webp&w=300&dpr=1.3" alt="Logo 1" boxSize="60px" width="40px" height="40px"/>
                        <Text textAlign="center" fontSize="md" color="teal.600" fontWeight="bold" >Competitive Salary</Text>
                    </Box>
                </VStack>
                <VStack spacing={4}>
                     <Box>
                        <Image src="https://prod-img.thesouledstore.com/public/theSoul/storage/career-revamp/02-Open-Office-Culture-F.svg?format=webp&w=300&dpr=1.3" alt="Logo 2" boxSize="60px" width="40px" height="40px" />
                        <Text textAlign="center" fontSize="md" color="teal.600" fontWeight="bold" >Open Office Culture</Text>
                    </Box>
                </VStack >
                <VStack spacing={4}>
                     <Box>
                        <Image src="https://prod-img.thesouledstore.com/public/theSoul/storage/career-revamp/union6.svg?format=webp&w=300&dpr=1.3" alt="Logo 3" boxSize="60px" width="40px" height="40px" />
                        <Text textAlign="center" fontSize="md" color="teal.600" fontWeight="bold" >Fast Growing Startup</Text>
                    </Box>
                </VStack >
                <VStack spacing={4}>
                     <Box>
                        <Image src="https://prod-img.thesouledstore.com/public/theSoul/storage/career-revamp/union5.svg?format=webp&w=300&dpr=1.3" alt="Logo 1" boxSize="60px"  width="40px" height="34px" />
                        <Text textAlign="center" fontSize="md" color="teal.600" fontWeight="bold">Equal Opportunities</Text>
                    </Box>
                </VStack>
            </HStack>
        </Container>
        <Container as="div" maxWidth="100%"  p={0}>
            <Box bg="gray.100" width="100%" height="200px">
                <Image src="https://prod-img.thesouledstore.com/public/theSoul/images/695c6db7-fb3d-4912-b6e1-8688bdf3af61.jpg?format=webp&w=1500&dpr=1.3" width="100%" height="100%" objectFit="cover" />
            </Box>
        </Container>
  </>
  )
}
