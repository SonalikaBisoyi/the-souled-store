import React from "react";
import { Box, Flex, Text, Heading, Button, Divider,Input} from "@chakra-ui/react";

const OrderPlaced = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      background="white"
    >
      <Box textAlign="center" mb="2">
        <Heading as="h1" fontSize="30px" color="#ED2939" fontFamily="Source Sans Pro,sans-serif" fontWeight="bold">
          Order Placed!
        </Heading>
        <Text mt="4" fontSize="20px" fontFamily="Source Sans Pro,sans-serif" color="#555555" fontWeight="bold">
          Hey Lucifer,
        </Text>
        <Text mt="2" fontSize="20px" fontFamily="Source Sans Pro,sans-serif" color="#555555" fontWeight="bold">
          Thank you for supporting a homegrown <br></br>Indian brand!
        </Text>
        <Text mt="4" fontSize="20px" fontFamily="Source Sans Pro,sans-serif" color="#555555" fontWeight="bold">
          A lot of passion and hard work goes into <br></br>each product, and we hope you
          love these products as <br></br>much as we loved creating them for you.
        </Text>
      </Box>
      <Box fontSize="18px" paddingLeft="230px" fontFamily="Source Sans Pro,sans-serif" color="#ED2939" fontWeight="bold">
        <Text>- Vedang Patel, Co-Founder</Text>
      </Box>
      <Box fontSize="20px" paddingRight="230px" fontFamily="Source Sans Pro,sans-serif" color="#555555" fontWeight="bold">
        <Text>ORDER ID:<br></br> 9171685</Text>
      </Box>
      <Box paddingLeft="200px" marginTop="-65px">
        <Button
          className="continue"
          color="white"
          padding="8px"
          border="1.5px solid #ED2939"
          backgroundColor="#ED2939"
          width="120%"
          borderRadius="8px"
          fontSize="20px"
        >
        CONTINUE SHOPPING
        </Button>
      </Box>
      <Box borderTop="0.5px solid #ccc" width="100%" marginTop="20px" />
      <Divider />
      <Box textAlign="center" mt="4">
        <Text fontSize="26px" fontWeight="bold" color="#ED2939" fontFamily="Source Sans Pro,sans-serif">
          How was your shopping experience?
        </Text>
        <Text fontSize="22px" color="#555555" mt="2" fontFamily="Source Sans Pro,sans-serif" fontWeight="20">
          Based on your overall shopping experience, how likely are you to <br></br>recommend The Souled Store to friends and family?
        </Text>
        <Input style={{border: "1px solid #ccc",
                      width:"100%",
                      fontSize: "14px",
                      marginRight: "20px",
                      borderRadius: "6px",
                      paddingBottom: "150px",
                      paddingTop: "10px",
                      paddingLeft: "10px"

                    }} 
                    type="text" name="feedback" placeholder="Please share any additional feedback here as it will only help us improve..."/>
        <Box paddingLeft="7px" marginTop="25px">
        <Button
          color="white"
          padding="6px"
          border="1.5px solid #ED2939"
          backgroundColor="#ED2939"
          width="27%"
          borderRadius="6px"
          fontSize="20px"
        >
        Submit
        </Button>
      </Box>           
        <Text fontSize="18px" color="#555555" mt="4">
          Please add your mobile number
        </Text>
        <Input type="tel"
              placeholder="Mobile Number*"
              style={{
                width: "50%",
                padding: "10px 10px 10px 5px",
                borderRadius: "8px",
                boxShadow: "none",
                border: "0.5px solid #ccc",
                borderWidth: "1px",
                marginRight: "180px"
              }}
        />
        <Box paddingLeft="10px" marginTop="25px">
        <Button
          color="white"
          padding="8px"
          border="1.5px solid #ED2939"
          backgroundColor="#ED2939"
          width="30%"
          borderRadius="4px"
          fontSize="14px"
          marginLeft="400px"
          marginTop="-110"
        >
        CONFIRM
        </Button> 
        </Box>
        <Text fontSize="26px" fontWeight="bold" color="#ED2939" fontFamily="Source Sans Pro,sans-serif">
          Have you downloaded our app yet?
        </Text>
        <Text fontSize="26px" color="#555555" mt="2" fontFamily="Source Sans Pro,sans-serif">
          Download now and have the smoothest <br></br>shopping experience!
        </Text>
        <Flex justifyContent="center" mt="4">
          <Button
            as="a"
            href="https://example.com/souled-store-app" 
            target="_blank"
            color="white"
            padding="8px"
            border="1.5px solid #ED2939"
            backgroundColor="#ED2939"
            width="45%"
            borderRadius="8px"
            fontSize="20px"
            mr="4"
          >
            The Souled Store App
          </Button>
          <Button
            as="a"
            href="https://example.com/souled-store-app" 
            target="_blank"
            color="white"
            padding="8px"
            border="1.5px solid #ED2939"
            backgroundColor="#ED2939"
            width="45%"
            borderRadius="8px"
            fontSize="20px"
            ml="4"
          >
            The Souled Store App
          </Button>
        </Flex>
        <Text fontSize="40px" color="#555555" mt="40" fontFamily="Source Sans Pro,sans-serif">
        Join us on your favorite social channel.
      </Text>
      </Box>
    </Flex>
  );
};

export default OrderPlaced;
