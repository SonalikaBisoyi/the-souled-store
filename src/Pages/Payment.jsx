import React, { useState } from "react";
import { Box, Flex, Text, Button, Heading, Divider } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const Payment = () => {
  const paymentOptions = [
    "UPI",
    "Wallets",
    "Credit & Debit Cards",
    "Netbanking",
    "CRED Pay",
    "COD"
  ];
  const cartTotal = 100;
  const gst = 0.18; 
  const shippingCharges = 10; 
  const totalAmount = cartTotal + cartTotal * gst + shippingCharges;

  const [showOptions, setShowOptions] = useState(false);
  const [hover, setHover] = useState(false);
  const handleSelectOption = (option) => {
    if (option === "UPI" || option === "Wallets" || option === "Credit & Debit Cards" || option === "Netbanking") {
      setShowOptions(!showOptions);
    }
  };
  return (
    <Flex direction="column" alignItems="center">
      <Heading as="h1" fontSize="13px" color="#017965" mt="4" mb="2">
        MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
      </Heading>
      <Divider />
      <h2 style={{ marginRight: "1000px", marginTop: "100px", color: "#5c5858", fontSize: "14px", fontWeight: "bold" }}>
        Payment Options
      </h2>
      <Flex marginRight="350px" width="60%">
        <Box p={2} borderWidth="1px" borderRadius="md" width="100%" mt="20px">
          <Box display="grid" gridTemplateColumns="1fr" gap={3}>
            {paymentOptions.map((option, index) => (
              <React.Fragment key={index}>
                <Flex
                  alignItems="center"
                  onClick={() => handleSelectOption(option)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Text style={{ color: (option === "UPI" || option === "Wallets" || option === "Credit & Debit Cards" || option === "Netbanking") && hover ? "#29AB87" : "inherit" }}>
                    {option}
                  </Text>
                  {(option === "UPI" || option === "Wallets" || option === "Credit & Debit Cards" || option === "Netbanking") && (
                    showOptions ? (
                      <ChevronUpIcon
                        color={hover ? "#29AB87" : "#5c5858"}
                        ml={620}
                        boxSize={8}
                      />
                    ) : (
                      <ChevronDownIcon
                        color={hover ? "#29AB87" : "black"}
                        ml={620}
                        boxSize={8}
                      />
                    )
                  )}
                </Flex>
                {(option === "UPI" || option === "Wallets" || option === "Credit & Debit Cards" || option === "Netbanking") && showOptions && (
                  <>
                     {option === "UPI" && (
                      <>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="gpay" style={{ marginRight: "8px" }} />
                          <label htmlFor="gpay">GPay</label>
                        </Flex>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="paytm" style={{ marginRight: "8px" }} />
                          <label htmlFor="paytm">PayTM UPI</label>
                        </Flex>
                      </>
                    )}
                    {option === "Wallets" && (
                      <>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="paytm" style={{ marginRight: "8px" }} />
                          <label htmlFor="paytm">Paytm</label>
                        </Flex>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="phonepe" style={{ marginRight: "8px" }} />
                          <label htmlFor="phonepe">PhonePe</label>
                        </Flex>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="freecharge" style={{ marginRight: "8px" }} />
                          <label htmlFor="freecharge">FreeCharge</label>
                        </Flex>
                      </>
                    )}
                    {option === "Credit & Debit Cards" && (
                      <div style={{border: "1px solid #ccc", borderRadius: "5px", width: "60%", marginLeft: "140px"}}>
                        <div style={{margin: "40px"}}>
                          <input
                            style={{padding: "10px", border: "0.5px solid #ccc", borderRadius: "10px", width: "100%"}}
                            type="number"
                            placeholder="xxxx xxxx xxxx xxxx"
                            required
                          />
                          <input
                            style={{border: "1px solid #ccc", width: "20%", fontSize: "10px", borderRadius: "8px", marginRight: "20px", padding: "10px"}}
                            type="number"
                            placeholder="Month 00"
                            required
                          />
                          <input
                            style={{border: "1px solid #ccc", width: "20%", fontSize: "10px", borderRadius: "8px", marginRight: "20px", padding: "10px"}}
                            type="number"
                            placeholder="Year 00"
                            required
                          />
                          <input
                            style={{border: "1px solid #ccc", width: "20%", fontSize: "10px", borderRadius: "8px", margin: "20px", padding: "10px"}}
                            type="number"
                            placeholder="CVV xx"
                            required
                          />
                          <input
                            style={{padding: "10px", border: "0.5px solid #ccc", borderRadius: "10px", width: "100%"}}
                            type="text"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                    )}
                    {option === "Netbanking" && (
                      <>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="hdfc" style={{ marginRight: "8px" }} />
                          <label htmlFor="hdfc">HDFC</label>
                        </Flex>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="icici" style={{ marginRight: "8px" }} />
                          <label htmlFor="icici">ICICI</label>
                        </Flex>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="sbi" style={{ marginRight: "8px" }} />
                          <label htmlFor="sbi">SBI</label>
                        </Flex>
                        <Flex alignItems="center">
                          <input type="radio" name="upiOption" id="axis" style={{ marginRight: "8px" }} />
                          <label htmlFor="axis">Axis</label>
                        </Flex>
                      </>
                    )}
                  </>
                )}
                {index !== paymentOptions.length - 1 && (
                  <Box borderTop="1px solid #ccc" pt={2} />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Flex>
      <Button
        style={{
          position: "absolute",
          top: "100px",
          marginLeft: "850px",
          backgroundColor: "#017965",
          color: "white",
          width: "30%"
        }}
      >
        CONFIRM ORDER
      </Button>
      <div style={{border: "1px solid #ccc", width: "28%", marginInlineStart: "850px", marginTop: "-350px"}}>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3} width="60%" mt="20px">
        <Text style={{ paddingRight: "20px", whiteSpace: "nowrap", paddingLeft: "10px" }}>
          Cart Total
        </Text>
        <Text textAlign="right">${cartTotal.toFixed(2)}</Text>
        <Box borderTop="1px solid #ccc" pt={2} gridColumn="1 / span 2" />

        <Text style={{ paddingRight: "190px", whiteSpace: "nowrap",paddingLeft: "10px" }}>
          GST ({(gst * 100).toFixed(0)}%)
        </Text>
        <Text textAlign="right">${(cartTotal * gst).toFixed(2)}</Text>
        <Box borderTop="1px solid #ccc" pt={2} gridColumn="1 / span 2" />

        <Text style={{ paddingRight: "140px", whiteSpace: "nowrap", paddingLeft: "10px" }}>
          Shipping Charges
        </Text>
        <Text textAlign="right">${shippingCharges.toFixed(2)}</Text>
        <Box borderTop="1px solid #ccc" pt={2} gridColumn="1 / span 2" />

        <Text
          style={{ paddingRight: "170px", whiteSpace: "nowrap",paddingLeft: "10px" }}
          fontWeight="bold"
          fontSize="14.5px"
        >
          Total Amount
        </Text>
        <Text fontWeight="bold" textAlign="right">
          ${totalAmount.toFixed(2)}
        </Text>
      </Box>
      </div>
      <div style={{marginTop: "20px"}}>
      <Button
        style={{
          position: "absolute",
          marginLeft: "230px",
          backgroundColor: "#017965",
          color: "white",
          width: "30%"
        }}
      >
        CONFIRM ORDER
      </Button>
      </div>
    </Flex>
  );
};
export default Payment;
