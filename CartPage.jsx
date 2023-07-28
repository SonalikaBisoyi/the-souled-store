// import React, { useContext } from 'react';
// import CartContext from '../Context/CartContext';
// import { Box, Heading, Text, Divider } from '@chakra-ui/react';


// const CartPage = () => {
//   const { cartItems } = useContext(CartContext);

//   // Calculate the total price of items in the cart
//   const getTotalPrice = () => {
//     let total = 0;
//     for (const item of cartItems) {
//       total += item.quantity * item.price;
//     }
//     return total;
//   };

//   return (
//     <Box p="20px" marginTop="700px">
//       <Heading size="lg" mb="4">
//         Cart
//       </Heading>

//       {cartItems.length === 0 ? (
//         <Text>No items in the cart.</Text>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <Box key={item.id}>
//               <Text>{item.name}</Text>
//               <Text>Quantity: {item.quantity}</Text>
//               <Text>Price: ₹{item.price}</Text>
//               <Divider my="4" />
//             </Box>
//           ))}

//           <Box mt="4">
//             <Text fontSize="lg" fontWeight="bold">
//               Total: ₹{getTotalPrice()}
//             </Text>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default CartPage;
// import React, { useContext } from 'react';
// import { Box, Flex, Heading, Text } from '@chakra-ui/react';
// import CartContext from '../Context/CartContext';
// import data from '../data.json';

// const CartPage = () => {
//   const { cartItems, setCartItems  } = useContext(CartContext);

//   // Function to calculate the total price of all items in the cart
//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       const product = data.products.find((p) => p.id === item.productId);
//       if (product) {
//         total += product.price * item.quantity;
//       }
//     });
//     return total;
//   };
//   const handleClearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <Box p="20px" marginTop="500px">
//       <Heading size="lg" mb="2">
//         Cart
//       </Heading>
//       {cartItems.length === 0 ? (
//         <Text>No items in the cart</Text>
//       ) : (
//         <Flex direction="column">
//           {cartItems.map((item) => {
//             const product = data.products.find((p) => p.id === item.productId);
//             return (
//               product && (
//                 <Box key={item.productId} p="10px" borderWidth="1px" borderRadius="md" my="2">
//                   <Heading size="md">{product.name}</Heading>
//                   <Text fontSize="lg" fontWeight="bold">
//                     Price: {product.price}
//                   </Text>
//                   <Text fontSize="lg" fontWeight="bold">
//                     Quantity: {item.quantity}
//                   </Text>
//                   <Text fontSize="lg" fontWeight="bold">
//                     Subtotal: {product.price * item.quantity}
//                   </Text>
//                 </Box>
//               )
//             );
//           })}
//           {/* Display the total price */}
//           <Box mt="20px">
//             <Text fontSize="lg" fontWeight="bold">
//               Total: {calculateTotal()}
//             </Text>
//           </Box>
//           <Box mt="20px">
//             <Button colorScheme="red" onClick={handleClearCart}>
//               Clear Cart
//             </Button>
//           </Box>
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;
// CartPage.js

// import React from 'react';
// import { Box, Heading, Text, Button ,Flex,Divider,Center} from '@chakra-ui/react';
// import CartItem from '../Components/CartItem';
// import { useCart } from '../Context/CartContext';
// import { Link } from 'react-router-dom'; 

// const CartPage = () => {
//   //const history = useHistory(); 
//   const { cartItems } = useCart();
//   // const onClicked = (value) => {
//   //   if (value === "cont") {
//   //     // Redirect to the home page when "CONTINUE SHOPPING" button is clicked
//   //     history.push("/");
//   //   }
//   //   // else if (value === "checkout") {
//   //   //   // Redirect to the AddNewAddress component when "CHECKOUT" button is clicked
//   //   //   history.push("/addnewaddress");
//   //   // }
//   // };


//   return (
//     <Box p="20px" marginTop="300px">
//       <Heading as="h1" fontSize="13px" color="#58595b" mt="4" mb="3">
//             MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
//           </Heading>
//         {cartItems.length === 0 ? (
//       <Flex direction="column" align="center" justify="center" minHeight="100vh">
          
//           <Divider />
//           <Center mt="15px">
//             <img
//               src="https://tss-static-images.gumlet.io/emptyCart.png"
//               alt="image"
//               style={{ width: "120px" }}
//             />
//           </Center>
//           <Heading as="h3" size="md" mt="2">
//             Your shopping cart is empty.
//           </Heading>
//           <Heading as="h4" size="sm" color="#58595b" mt="2">
//             Please add something soon, carts have feelings too.
//           </Heading>

//           <Box className="categories" backgroundColor="#f6f6ff" p="4" mt="4" borderRadius="md" maxWidth="500px">
//             <Center>
//               <Heading as="h4" mb="5px" pb="5px" fontSize="13px">
//                 Popular Categories
//               </Heading>
//             </Center>
//             <div className="rowline1">
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">
//                 Men's T-shirts
//               </Button>
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">
//                 Women's T-Shirts
//               </Button>
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">
//                 Joggers
//               </Button>
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="2" pb="2" m="1.5">
//                 Shorts
//               </Button>
//             </div>
//             <div className="rowline">
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="1" pb="1" m="1.5">
//                 vests
//               </Button>
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="1" pb="1" m="1.5">
//                 Full Sleeve T-Shirt
//               </Button>
//               <Button className="button" fontSize="11.5px" border="1px solid #ccc" pt="1" pb="1" m="1.5">
//                 Polos
//               </Button>
//             </div>
//           </Box>

//           <Box>
//             <Link to="/">
//             <Button
//               className="continue"
//               color="rgb(2, 136, 123)"
//               onClick={() => onClicked("cont")}
//               mt="4"
//               border="1.5px solid rgb(2, 136, 123)"
//             >
//               CONTINUE SHOPPING
//             </Button>
//             </Link>
//           </Box>
//         </Flex>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <CartItem key={item.product.id} item={item} />
//           ))}
//           {/* Display the total sum here */}
//           <Text>Total: $ {calculateTotalSum(cartItems).toFixed(2)}</Text>
//           <div>
//           <Button
//             className="clear-cart-button"
//             colorScheme="red"
//             onClick={() => clearCartItems()}
//             mt="4"
//             mr="2"
//           >
//             CLEAR CART
//           </Button>
//           <Link to="/addnewaddress">
//           <Button
//             className="checkout-button"
//             color="rgb(2, 136, 123)"
//             onClick={() => onClicked("checkout")}
//             mt="4"
//             border="1.5px solid rgb(2, 136, 123)"
//           >
//             CHECKOUT
//           </Button>
//           </Link>
//         </div>
//         </>
//       )}
//     </Box>
//   );
// };

// // Function to calculate the total sum of items in the cart
// const calculateTotalSum = (cartItems) => {
//   return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
// };

// export default CartPage;


import React from 'react';
import { Box, Heading, Text, Button, Flex, Divider, Center } from '@chakra-ui/react';
import CartItem from '../Components/CartItem';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, clearCartItems } = useCart();

  return (
    <Box p="20px" marginTop="300px">
      <Heading as="h1" fontSize="13px" color="#58595b" mt="4" mb="3">
        MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
      </Heading>
      {cartItems.length === 0 ? (
        <Flex direction="column" align="center" justify="center" minHeight="100vh">
          <Divider />
          <Center mt="15px">
            <img src="https://tss-static-images.gumlet.io/emptyCart.png" alt="image" style={{ width: "120px" }} />
          </Center>
          <Heading as="h3" size="md" mt="2">
            Your shopping cart is empty.
          </Heading>
          <Heading as="h4" size="sm" color="#58595b" mt="2">
            Please add something soon, carts have feelings too.
          </Heading>

          <Box className="categories" backgroundColor="#f6f6ff" p="4" mt="4" borderRadius="md" maxWidth="500px">
            <Center>
              <Heading as="h4" mb="5px" pb="5px" fontSize="13px">
                Popular Categories
              </Heading>
            </Center>
            <div className="rowline1">
              {/* Rest of the buttons... */}
            </div>
            <div className="rowline">
              {/* Rest of the buttons... */}
            </div>
          </Box>

          <Box>
            <Link to="/">
              <Button
                className="continue"
                color="rgb(2, 136, 123)"
                mt="4"
                border="1.5px solid rgb(2, 136, 123)"
              >
                CONTINUE SHOPPING
              </Button>
            </Link>
          </Box>
        </Flex>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
          {/* Display the total sum here */}
          <Text>Total: $ {calculateTotalSum(cartItems).toFixed(2)}</Text>
          <div>
            <Button
              className="clear-cart-button"
              colorScheme="red"
              onClick={() => clearCartItems()}
              mt="4"
              mr="2"
            >
              CLEAR CART
            </Button>
            <Link to="/addnewaddress">
              <Button
                className="checkout-button"
                color="rgb(2, 136, 123)"
                mt="4"
                border="1.5px solid rgb(2, 136, 123)"
              >
                CHECKOUT
              </Button>
            </Link>
          </div>
        </>
      )}
    </Box>
  );
};

// Function to calculate the total sum of items in the cart
const calculateTotalSum = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};

export default CartPage;



