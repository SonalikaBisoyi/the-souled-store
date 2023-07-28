import React from 'react';
import { Card,  CardBody, CardFooter, SimpleGrid, Text, Image, Container , Button, Box, Stack } from '@chakra-ui/react';

export default function SouledArmy() {
  return (
    <div marginTop="400px">
      <Container as="div" pt="24px" marginTop={'120px'}>
         <Stack direction="row" justify="center" align="center" spacing={4}>
            <Button colorScheme="teal.600" mt={4} bg="teal.600" color="white"  fontWeight="bold" width="240px" >
            Get Featured
        </Button>
         </Stack>
      </Container>
      
      <Box p={{ base: '20px', md: '30px', lg: '40px' }}>
        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} height="auto" pt="50px" justifyContent="space-around" pr="150px" pl="150px">
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190402120218_Kubbra-Sait.jpg?h=263&w=263" alt = "p1" 
              style={{ width: "263px", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Powerpuff Girls: The Trio Mug</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325200138_Borges_Andre.jpg?h=263&w=263" alt = "p2" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>K. T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20221025111739.JPG?h=263&w=263" alt = "p3" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Solids: Blue & White</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20221025112057.jpg?h=263&w=263" alt = "p4" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Solids: Lavender</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190402121949_Rahul-Subramanium.jpg?h=263&w=263" alt = "p5" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Kunal Kamra: Waah Modiji Waah T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20221025112139.webp?h=263&w=263" alt = "p6" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Powerpuff Girls: Saving The Day</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20221025112225.jpg?h=263&w=263" alt = "p7" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Solids Full Sleeve: Anthra Melange Set</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20221025112516.jpg?h=263&w=263" alt = "p8" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Captain America: Guardian of Freedom</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190402130054_Puncch_Beat.jpeg?h=263&w=263" alt = "p9" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Official Puncch Beat Merchandise</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190715163323_For-Track-Pants-2.png?h=263&w=263" alt = "p10" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Official Chennai Super Kings Jerseys</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190402130502_Sachin-Tendulkar.jpg?h=263&w=263" alt = "p11" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>WWE: WWE Championship Replica Title <br/>Belt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325200224_Kunal-Kamra.jpg?h=263&w=263" alt = "p12" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Waah Modiji Waah T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190402133958_MSDhoni.jpg?h=263&w=263" alt = "p13" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>CSK: Official Match Replica Jersey</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325200238_Mallika_Dua.jpg?h=263&w=263" alt = "p14" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>K. T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325200246_Ranbir-Kapoor.jpg?h=263&w=263" alt = "p15" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Harry Potter: Hogwarts Sigil</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190715163341_Lasith-Malinga.png?h=263&w=263" alt = "p16" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>MI: Official Travel Polo Men</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325200307_Robin.jpg?h=263&w=263" alt = "p17" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Batman: Be Yourself T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325200123_Aditi_Mitttal.jpg?h=263&w=263" alt = "p18" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Aditi Mittal: A-blah Nari T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190401210525_Vivek_Dahiya.jpg?h=263&w=263" alt = "p19" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Johnny Bravo: Hunk</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190823102105_IMG_20190819_185632_598_compress60.jpg?h=263&w=263" alt = "p20" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Black Panther: T'Challa's Necklace T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325201545_Varun_Dhawan.jpg?h=263&w=263" alt = "p21" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>WWE: Authentic Seth Rollins</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190402123649_Full-power.jpg?h=263&w=263" alt = "p22" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>RJ Roshan: Full Power T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190325201632_Varun-Dhawan.jpg?h=263&w=263" alt = "p23" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>WWE: The Rock T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190712141824_7a31f3b8-4729-4176-bab6-3dc3e3ce6c18.jpg?h=263&w=263" alt = "p24" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>The Flash: Point T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190825100815_3C7900BD-303B-4A40-9979-751785B2D9CF.jpeg?h=263&w=263" alt = "p25" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Looney Tunes: Bugs Dress</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190713224403_BeautyPlus_20190713224238460_save.jpg?h=263&w=263" alt = "p26" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>WWE: Steve Austin "Austin 3:16" T-shirt</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20180502125600_Harshit.jpg?h=263&w=263" alt = "p27" 
              style={{ width: "263px", height: "263px", objectFit: "cover" }}
              />
            </CardBody>
            
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20190401210437_Rohit-Sharma.jpg?h=263&w=263" alt = "p28" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>WWE: WWE Championship Replica</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20180825145310_IMG_19700204_092633.jpg?h=263&w=263" alt = "p29" 
              style={{ width: "100%", height: "263px", objectFit: "cover" }}
              />
            </CardBody>
            <CardFooter pt="6px">
              <Text>Joker: Devil's Advocate Phone Cover</Text>
            </CardFooter>
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20180502130027_Priyadarshani.jpg?h=263&w=263" alt = "p30" 
              style={{ width: "263px", height: "263px", objectFit: "cover" }}
              />
            </CardBody>
            
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20180502145507_Reshmi.jpg?h=263&w=263" alt = "p31" 
              style={{ width: "263px", height: "263px", objectFit: "cover" }}
              />
            </CardBody>
          
          </Card>
          <Card border="none" shadow="none">
            <CardBody paddingBottom="6px" >
              <Image src = "https://prod-img.thesouledstore.com/public/theSoul/fan_images/20180502145507_Rutuja.jpg?h=263&w=263" alt = "p32" 
              style={{  width: "263px", height: "263px", objectFit: "cover" }}
              />
            </CardBody>
            
          </Card>
        </SimpleGrid> 
      </Box> 
    
    </div>
  )
}
