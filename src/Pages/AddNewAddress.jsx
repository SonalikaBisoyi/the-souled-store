import React, { useState } from "react";
import { Flex, Heading, Divider, Button } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import PopupAddressForm from "../Components/PopupAddressForm";
import BillingDetails from "../Components/BillingDetails";
import AddressDetails from "../Components/AddressDetails";

function AddNewAddress() {
  const [popup, setPopup] = useState(false);
  const [addressDetails, setAddressDetails] = useState({}); // State to hold address details

  const handlePlusIconClick = () => {
    setPopup(true);
  };

  const handleClosePopup = (newAddDetails) => {
    setAddressDetails(newAddDetails);
    setPopup(false);
  };

  const handleEditClick = () => {
    setPopup(true);
  };

  const handleRemoveClick = () => {
    setAddressDetails({});
  };

  return (
    <div style={{ display: "flex", marginLeft: "50px", maxWidth: "600px" }}>
      <div style={{ flex: "1" }}>
        <Heading as="h1" fontSize="13px" color="#58595b" mt="4" mb="3">
          MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
        </Heading>
        <Divider />
        <h2 style={{ marginRight: "1140px", paddingBottom: "20px", paddingTop: "40px", whiteSpace: "nowrap", color: "#5c5858", fontWeight: "bold" }}>Delivery To</h2>
        <AddressDetails
          addressDetails={addressDetails}
          onEditClick={handleEditClick}
          onRemoveClick={handleRemoveClick}
        />
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          p="20px"
          w="600px"
          border="solid 2px #ecf3f9"
          position="absolute"
          padding="80px 10px 80px 10px"
          maxWidth="30%"
          flexDirection="column"
        >
          <Button
            onClick={handlePlusIconClick}
            style={{ cursor: "pointer" }}
            leftIcon={<PlusSquareIcon boxSize="10" color="black" />}
          >
            Add New Address
          </Button>
          {popup && <PopupAddressForm onClose={handleClosePopup} addressDetails={{}} />}
        </Flex>
        <BillingDetails />
      </div>
    </div>
  );
}

export default AddNewAddress;


