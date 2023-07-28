import React, { useState } from "react";
import { Box, Flex, Text, Button, Heading, Divider } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Creditdebitcard from "../images/Creditdebitcard.webp";

const Payment = () => {
  const paymentOptions = [
    "UPI",
    "Wallets",
    "Credit & Debit Cards",
    "Netbanking",
    "CRED Pay",
    "COD"
  ];
  const [showOptions, setShowOptions] = useState(false);
  const [hover, setHover] = useState(false);
  const handleSelectOption = (option) => {
    if (option === "UPI" || option === "Wallets") {
      setShowOptions(!showOptions);
    }
  };
  return (
    <Flex direction="column" alignItems="center">
      <Heading as="h1" fontSize="13px" color="#58595b" mt="4" mb="2">
        MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
      </Heading>
      <Divider />
      <h2 style={{ marginRight: "1000px", marginTop: "100px", color: "#5c5858", fontSize: "14px", fontWeight: "bold" }}>
        Payment Options
      </h2>
      <Flex justify="start" marginRight="350px" width="60%">
        <Box p={2} borderWidth="1px" borderRadius="md" width="95%" mt="20px">
          <Box display="grid" gridTemplateColumns="1fr" gap={3}>
            {paymentOptions.map((option, index) => (
              <React.Fragment key={index}>
                <Flex
                  alignItems="center"
                  onClick={() => handleSelectOption(option)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Text style={{ color: option === "UPI" || option === "Wallets" || option === "Credit & Debit Cards" && hover ? "#29AB87" : "inherit" }}>
                    {option}
                  </Text>
                  {(option === "UPI" || option === "Wallets" || option === "Credit & Debit Cards") && (
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
                {option === "UPI" && showOptions && (
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
                {option === "Wallets" && showOptions && (
                    <>
                      <Flex alignItems="center">
                        <input type="radio" name="upiOption" id="paytm" style={{ marginRight: "8px" }} />
                        <label htmlFor="gpay">Paytm</label>
                      </Flex>
                      <Flex alignItems="center">
                        <input type="radio" name="upiOption" id="phonepe" style={{ marginRight: "8px" }} />
                        <label htmlFor="paytm">PhonePe</label>
                      </Flex>
                      <Flex alignItems="center">
                        <input type="radio" name="upiOption" id="freecharge" style={{ marginRight: "8px" }} />
                        <label htmlFor="paytm">FreeCharge</label>
                      </Flex>
                    </>
                )}
                {option === "Credit & Debit Cards" && showOptions && (
                    <>
                    <div>
                      <div>
                        <input type="number" placeholder="Card Number xxxx xxxx xxxx xxxx" required />
                      </div>
                      <div>
                        <input type="month" placeholder="Month 00" required />
                        <input type="year" placeholder="Year 00" required />
                        <input type="cvv" placeholder="CVV xx" required />
                      </div>
                      <div>
                        <input type="name" placeholder="Name on Card Your Name" required />
                      </div>
                      <div>
                        <img src={Creditdebitcard} alt="creditdebit"/>
                      </div>
                    </div>
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
      <div style={{ marginTop: "20px", marginLeft: "700px" }}>
        <Button style={{ width: "75%", backgroundColor: "#017965", color: "white" }}>
          PAY NOW
        </Button>
      </div>
    </Flex>
  );
};
export default Payment;