import { ChakraProvider, Flex, Box, Heading, Button, Divider, Center } from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CartPage from "./Pages/CartPage";
import Allroutes from "./Components/Allroutes";

function App() {
  const [cont, setContinue] = useState(false);

  const onClicked = (value) => {
    if (value === "cont") {
      setContinue(true);
    }
  };

  return (
    <ChakraProvider>
      <Router>
        <Flex direction="column" align="center" justify="flex-start" minHeight="100vh">
          <Heading as="h1" fontSize="13px" color="#58595b" mt="4" mb="3">
            MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
          </Heading>
          <Divider />
          <Center mt="15px">
            <img
              src="https://tss-static-images.gumlet.io/emptyCart.png"
              alt="image"
              style={{ width: "120px" }}
            />
          </Center>
          <Heading as="h3" size="md" mt="2">
            Your shopping cart is empty.
          </Heading>
          <Heading as="h4" size="sm" color="#58595b" mt="2">
            Please add something soon, carts have feelings too.
          </Heading>

          <Box className="categories" backgroundColor="#f6f6ff" p="4" mt="4" borderRadius="md" maxWidth="500px">
            <Center>
              <Heading as="h4" mb="5px" pb="5px" fontSize="13px">Popular Categories</Heading>
            </Center>
            <div className="rowline1">
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">Men's T-shirts</Button>
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">Women's T-Shirts</Button>
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">Joggers</Button>
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">Shorts</Button>
            </div>
            <div className="rowline">
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="1" pb="1" m="1.5">Tank Tops</Button>
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="1" pb="1" m="1.5">Full Sleeve T-Shirt</Button>
              <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="1" pb="1" m="1.5">Polos</Button>
            </div>
          </Box>

          <Box>
            <Button
              className="continue"
              color="rgb(2, 136, 123)"
              onClick={() => onClicked("cont")}
              mt="4"
              border="1.5px solid rgb(2, 136, 123)"
            >
              CONTINUE SHOPPING
            </Button>
          </Box>
          {cont ? <Allroutes /> : <CartPage />}
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
