 import { Container, Text,HStack, Image, Box, Heading, Divider } from '@chakra-ui/react'
 //import { VStack,  } from '@chakra-ui/react'
 import React from 'react'
 //import graph from './Reqimg/graph.jpg';


 function Feature({ title, desc,image, ...rest }) {
   return (
     <Box p={5} shadow='md' borderWidth='1px' {...rest}>
     {/* Add an image element if the 'image' prop is provided */}
       {image && <Image src={image} alt={title} />}
       <Heading fontSize='xl'>{title}</Heading>
       <Text mt={6} textAlign="left" fontSize="15px" marginBottom="25px" color="gray.600">{desc}</Text>
     </Box>
  );
 }

 export default function About() {
   return (
    <>
     <Container as="div" bg="teal.600" maxWidth="100%" height="150px" >
         <Text color="white"  textAlign="center" paddingTop="50px">
             Our 'About Us' page would like to thank you from the bottom of its heart for visiting.<br/>
 It doesn't get a lot of attention usually, as people are busy surfing other, 'cooler' pages. The fact that you voluntarily decided to come here means a lot. Honestly. *sniff sniff*
         </Text>
        </Container> 
        <Container as="div" bg="white" maxWidth="100%" height="300px" mb="0" >
         <HStack spacing={8}>
       <Feature 
         //title='Plan Money'
         //desc='The future can be even brighter but a goal without a plan is just a wish'
         // Pass the image URL as the 'image' prop for the second container/         image='https://tss-static-images.gumlet.io/banners/about-whoweare.jpg'
       />
       <Feature
         title='We are your favourite, online store.'
         desc="We create and curate stunning designs and print them on all sorts of equally stunning products- from t-shirts to phone covers to backpacks to boxers to mugs to socks to badges to pins to hoodies and many, many more! Our funky products are designed and printed specifically to spread happiness, right down to the bottom of your 'soul'. A recent study by our internal, self-funded, fashion forward (and totally unbiased) team showed that if you buy from www.thesouledstore.com, it increases your lifespan by 7.5%. So if you're looking for great products, with even greater deals and discounts, you've come to the right place!"
        
      />
     </HStack>
     <HStack spacing={8}>
       <Feature
         title="Putting the 'pop' in pop culture"
         desc="We're the sock to your Dobby, the ring to your Gollum, the Jarvis to your Iron Man, the people's elbow to your The Rock, the red underwear to your Superman, the Chandler to your Joey, the Luke to your Leia, the Bamm-Bamm to your Pebbles... we could go on. We’re here to celebrate fandom with all of you, by bringing to you official merchandise of your favourite Hollywood movies, TV shows, sports teams, comedians, and musicians, with a wide range of kickass graphic designs on all your favourite products."
         // Pass the image URL as the 'image' prop for the second container
       
       />
       <Feature
         //title='We are your favourite, online store.'
         //desc='We create and curate stunning designs and print them on all sorts of equally stunning products- from t-shirts to phone covers to backpacks to boxers to mugs to socks to badges to pins to hoodies and many, many more! Our funky products are designed and printed specifically to spread happiness, right down to the bottom of your ‘soul’. A recent study by our internal, self-funded, fashion forward (and totally unbiased) team showed that if you buy from www.thesouledstore.com, it increases your lifespan by 7.5%. So if you’re looking for great products, with even greater deals and discounts, you’ve come to the right place!'
          image='https://tss-static-images.gumlet.io/banners/about-whoweare2.png'
        
       />
     </HStack>
     <Container as="div" bg="teal.600" maxWidth="100%" height="300px" mt="0" >
         <Text color="white"  textAlign="center" paddingTop="30px" fontWeight="bold" fontSize="xl">
             Why we're called 'The Souled Store'
         </Text>
         <Text pt="30px" color="white" textAlign="center" pl="200px" pr="200px" pb="40px">
           For starters, it makes for a great pun on the word ‘sold’, since we ‘sell' stuff. Smart, right? But more importantly, The Souled Store was born out of the idea of loving what you do - “following your soul”. Our philosophy is that life is short. Don’t spend it doing something you don’t like. There are too many Monday mornings, and you can’t go dreading every single one of them.<br/>

 We, at The Souled Store, love what we do- designs, products, marketing, and everything in between. Our goal is to give everyone something they'll love, something they can use to express themselves, and, simply put, something to put a smile on their face. So, whether it's superheroes, TV shows, pop culture, music, sports, or quirky, funny stuff you're looking for, we have something for everyone. Because each person is a special snowflake (whether or not they believe it), and they deserve only the most insane merchandise available out there! So, if you relate to the feeling, and believe in following one's heart (soul), hop along on this wonderful journey of ours, and help us spread the love!
         </Text>
        </Container>
        <Container maxWidth="100%" pl="300px">
           <img src="https://tss-static-images.gumlet.io/banners/about-doodlebanner.png" alt = "Group"/>
        </Container>
      
       <Container as="div" bg="teal.600" maxWidth="100%" height="300px" mt="0" >
       <Text color="white"  textAlign="center" paddingTop="30px" fontWeight="bold" fontSize="xl">
         The Team
       </Text>
       <Text pt="30px" color="white" textAlign="center" pl="200px" pr="200px" pb="40px">
       We’re a bunch of comic book loving, lame joke cracking, and slightly weird but largely likeable people. We love what we do, and don’t take ourselves too seriously. This company was started by 4 people, with a cupboard full of clothes (probably the size of your wardrobe). We’ve now grown to over 150 people, and graduated from cupboards to warehouses, but really, that’s all that’s changed. We’re still childishly excited about everything we do- from the random post-it wall, to the unnecessary instructions outside the bathroom door, the board game sessions, and the pot-luck lunches.<br/>

 And we try and ensure that this philosophy resonates with all those who come and join our family. So, if you’re bored of your current desk job and believe that ‘work’ does not necessarily have to be a bad word, look no further. We’d love to have you on our team!
       </Text>
       </Container>
       <Container maxWidth="100%" height="70px">
           <Text textAlign="left" fontSize="x-large" fontWeight="bold" color="#58595B" pl="200px" pt="15px">Testimonials By Our Products</Text>
         
       </Container>
       <Divider/>
       <Container as="div" bg="white" maxWidth="100%" height="500px" mb="0">
         <HStack spacing={0}>
         <Feature 
         image='https://tss-static-images.gumlet.io/banners/about-testimonial.png'
       />
       <Feature
         title="T-Shirts"
         desc="“The Souled Store and us go back a long way, and they’ve been great buddies throughout. They’ve constantly given us these amazing designer makeovers- adding pockets, using glow-in-the-dark inks, playing around with our colours, increasing sleeves, etc. We’ve now become so popular that we’re regularly mobbed in public, and even celebrities can’t seem to get enough of us. Our population is growing at a frantic pace, and we’ll soon accomplish our goal of being present in every house on this planet. If you’re lazy and prefer online shopping for your clothes, you know where to find us! &#10;
         - Tim the T-shirt"
        
       />
         </HStack>
         <HStack spacing={0}>
         <Feature 
         image='https://tss-static-images.gumlet.io/banners/about-boxersTestimonials.png'
       />
       <Feature
         title="Boxers"
         desc="“We’ve had a love-hate relationship with the world. We always felt terrible that we were never really seen because we were always in someone’s pants (no, it isn’t that much fun). Then, a few years ago, a bunch of kids started wearing their pants really low and we suddenly started getting noticed again. Life was good. Unfortunately, that was just a fad, and died pretty soon. The Souled Store finally helped put us on the map again, by making us fun, quirky, and adding cool pattern prints! Now, most people don’t even bother wearing pants, they casually lounge around in us. We’re finally independent and self-sufficient loungewear, and have The Souled Store’s design team to thank!”
 – Bob the Boxer"
        
      />
         </HStack>
         <HStack spacing={0}>
         <Feature 
         image='https://tss-static-images.gumlet.io/banners/about-mobile-covers.png'
       />
       <Feature
         title="Phone Covers"
         desc="“You’re probably reading this on your mobile right now. Everyone seems to be on their phones all the time, yet cares little about them. Throw us on the bed, forget us in taxis- it’s like you guys never cared about us. If things got really bad, you probably put a screen guard or complained about how expensive screen replacements are.

 It’s about time things changed, and thanks to The Souled Store, they have. They’ve done a fantastic job of giving us a complete makeover with their kickass designs. We’re now fashionable and functional. We know we’re growing at a frantic pace, adding new models every day. But the team at The Souled Store somehow manages to keep up, and ensure our entire family is well represented. Kudos and much love!”
 - Paul the Phone Cover"
        
       />
         </HStack>
     </Container>
      

     </Container>

    
    
    

    
   </>      
   
   )
 }
