import { Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

const BillingDetails = () => {
  const cartTotal = 3000;
  const gst = 0.11;
  const shippingCharges = 100;
  const totalAmount = cartTotal + cartTotal * gst + shippingCharges;

  const PaymentUrl= "/payment";

  return (
    <div style={{ marginTop: "-10px" }}>
      <h2
        style={{ paddingLeft: "420px", marginBottom: "20px", color: "#b6b6b4" }}
      >
        BILLING DETAILS
      </h2>
      <Flex justify="flex-end" marginRight="60px">
        <Box p={2} borderWidth="1px" borderRadius="md" width="35%">
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
            <Text style={{ paddingRight: "200px", whiteSpace: "nowrap" }}>
              Cart Total
            </Text>
            <Text textAlign="right">${cartTotal.toFixed(2)}</Text>
            <Box borderTop="1px solid #ccc" pt={2} gridColumn="1 / span 2" />
            <Text style={{ paddingRight: "190px", whiteSpace: "nowrap" }}>
              GST ({gst * 100}%)
            </Text>
            <Text textAlign="right">${(cartTotal * gst).toFixed(2)}</Text>
            <Box borderTop="1px solid #ccc" pt={2} gridColumn="1 / span 2" />
            <Text style={{ paddingRight: "140px", whiteSpace: "nowrap" }}>
              Shipping Charges
            </Text>
            <Text textAlign="right">${shippingCharges.toFixed(2)}</Text>
            <Box borderTop="1px solid #ccc" pt={2} gridColumn="1 / span 2" />
            <Text
              style={{ paddingRight: "170px", whiteSpace: "nowrap" }}
              fontWeight="bold"
              fontSize="14.5px"
            >
              Total Amount
            </Text>
            <Text fontWeight="bold" textAlign="right">
              ${totalAmount.toFixed(2)}
            </Text>
          </Box>
        </Box>
      </Flex>
      <div style={{ marginTop: "20px", marginLeft: "700px" }}>
        <a href={PaymentUrl} target="_blank" rel="noopener noreferrer">
          <Button
            style={{ width: "75%", backgroundColor: "#017965", color: "white" }}
          >
            CONTINUE TO PAYMENT
          </Button>
        </a>
      </div>
    </div>
  );
};
export default BillingDetails;