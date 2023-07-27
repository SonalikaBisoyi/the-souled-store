import { useState } from 'react';
import { Heading, Button, Select } from "@chakra-ui/react";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const productDetails = {
    name: "Sample Product",
    price: "$19.99",
    quantity: 1,
    size: "M",
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, productDetails]);
  };

  const removeFromCart = (val) => {
    const updatedCart = cartItems.filter((_, i) => i !== val);
    setCartItems(updatedCart);
  };

  const incQuantity = (val) => {
    const updatedCart = [...cartItems];
    updatedCart[val].quantity += 1;
    setCartItems(updatedCart);
  };

  const decQuantity = (val) => {
    const updatedCart = [...cartItems];
    if (updatedCart[val].quantity > 1) {
      updatedCart[val].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  const moveToWishlist = (val) => {
    const itemToMove = cartItems[val];
    setWishlistItems([...wishlistItems, itemToMove]);
    removeFromCart(val);
  };

  return (
          <div className="productlist">
            {cartItems.map((item, val) => (
              <div key={val} className="productitem">
                <Heading as="h3">{item.name}</Heading>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
                <Button colorScheme="red" onClick={() => removeFromCart(val)}>
                  REMOVE
                </Button>
                <Button colorScheme="green" onClick={() => incQuantity(val)}>
                  +
                </Button>
                <Button colorScheme="red" onClick={() => decQuantity(val)}>
                  -
                </Button>
                <Button colorScheme="blue" onClick={() => moveToWishlist(val)}>
                  MOVE TO WISHLIST
                </Button>
                <Select
                  value={item.size}
                  onChange={(e) => {
                    const updatedCart = [...cartItems];
                    updatedCart[val].size = e.target.value;
                    setCartItems(updatedCart);
                  }}
                >
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </Select>
              </div>
            ))}
          </div>
  );
}

export default CartPage;
