import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  Button,
  useDisclosure,
  Checkbox,
  Select,
  Flex
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function PopupAddressForm({ addressDetails}) {
  const { isOpen, onClose } = useDisclosure();
  const [location, setLocation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);

  const handleSubmit = () => {
    console.log("Location:", location);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("House No:", houseNo);
    console.log("Street:", street);
    console.log("Postal Code:", postalCode);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Country:", country);
    console.log("Phone Number:", mobileNumber);
    console.log("Is Default Address:", isDefaultAddress);
    onClose(addressDetails);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              width: "600px",
              border: "solid #ecf3f9"
            }}
          >
            <ModalHeader style={{ fontSize: "25px", color: "#555555" }}>
              Add New Address
              <CloseIcon
                cursor="pointer"
                onClick={onClose}
                boxSize="10"
                color="black"
                style={{ marginLeft: "400px" }}
              />
            </ModalHeader>
            <hr style={{ borderTop: "1px solid #E2E8F0", margin: "16px 0" }} />
            <ModalBody>
              <FormControl id="location" mb="20">
                <Input
                  type="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Use my current location"
                  style={{
                    width: "40%",
                    padding: "10px 10px 10px 5px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    border: "none",
                    borderWidth: "1px",
                    backgroundColor: "#6CB4EE"
                  }}
                />
              </FormControl>
              <Flex mb="4">
                <FormControl id="firstName" mb="20">
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name*"
                    style={{
                      width: "150%",
                      padding: "10px 10px 10px 5px",
                      borderRadius: "8px",
                      boxShadow: "none",
                      borderWidth: "1px",
                      border: "0.5px solid #ccc"
                    }}
                  />
                </FormControl>
                <FormControl id="lastName" mb="20" margin="0px 0px 0px 130px">
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name*"
                    style={{
                      width: "150%",
                      padding: "10px 10px 10px 5px",
                      borderRadius: "8px",
                      boxShadow: "none",
                      border: "0.5px solid #ccc",
                      borderWidth: "1px"
                    }}
                  />
                </FormControl>
              </Flex>
              <FormControl id="houseNo" mb="20">
                <Input
                  type="text"
                  value={houseNo}
                  onChange={(e) => setHouseNo(e.target.value)}
                  placeholder="House No,Building Name*"
                  style={{
                    width: "97%",
                    padding: "10px 10px 10px 5px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    border: "0.5px solid #ccc",
                    borderWidth: "1px"
                  }}
                />
              </FormControl>

              <FormControl id="street" mb="20">
                <Input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="Street Name,Area*"
                  style={{
                    width: "97%",
                    padding: "10px 10px 10px 5px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    border: "0.5px solid #ccc",
                    borderWidth: "1px"
                  }}
                />
              </FormControl>
              <Flex mb="4">
                <FormControl id="postalCode" mb="20">
                  <Input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal Code*"
                    style={{
                      width: "150%",
                      padding: "10px 10px 10px 5px",
                      borderRadius: "8px",
                      boxShadow: "none",
                      border: "0.5px solid #ccc",
                      borderWidth: "1px"
                    }}
                  />
                </FormControl>
                <FormControl id="city" mb="20" margin="0px 0px 0px 130px">
                  <Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City/District*"
                    style={{
                      width: "150%",
                      padding: "10px 10px 10px 5px",
                      borderRadius: "8px",
                      boxShadow: "none",
                      border: "0.5px solid #ccc",
                      borderWidth: "1px"
                    }}
                  />
                </FormControl>
              </Flex>
              <Flex mb="4">
                <FormControl id="country" mb="20">
                  <Select
                    value={country}
                    style={{
                      width: "230%",
                      padding: "10px 10px 10px 5px",
                      borderRadius: "8px",
                      boxShadow: "none",
                      border: "0.5px solid #ccc",
                      borderWidth: "1px"
                    }}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="select country">Select Country</option>
                    <option value="country1">India</option>
                  </Select>
                </FormControl>
                <FormControl id="state" mb="20" margin="0px 0px 0px 180px">
                  <Select
                    value={state}
                    style={{
                      width: "270%",
                      padding: "10px 10px 10px 5px",
                      borderRadius: "8px",
                      boxShadow: "none",
                      border: "0.5px solid #ccc",
                      borderWidth: "1px"
                    }}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="Select State">Select State</option>
                    <option value="state1">State 2</option>
                    {/* Add more states as needed */}
                  </Select>
                </FormControl>
              </Flex>

              <FormControl id="mobileNumber" mb="20">
                <Input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Phone no*"
                  style={{
                    width: "97%",
                    padding: "10px 10px 10px 5px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    border: "0.5px solid #ccc",
                    borderWidth: "1px"
                  }}
                />
              </FormControl>

              <Checkbox
                isChecked={isDefaultAddress}
                onChange={(e) => setIsDefaultAddress(e.target.checked)}
              >
                Make this my default address
              </Checkbox>
              <hr
                style={{ borderTop: "1px solid #E2E8F0", margin: "16px 0" }}
              />
            </ModalBody>

            <ModalFooter>
              <Flex>
                <Button
                  colorScheme="blue"
                  mr={15}
                  onClick={onClose}
                  style={{
                    width: "100px",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    border: "0.5px solid #ccc",
                    borderWidth: "1px"
                  }}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="gray"
                  onClick={handleSubmit}
                  style={{
                    width: "100px",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    border: "1px solid #ff0000",
                    borderWidth: "1px",
                    backgroundColor: "red"
                  }}
                >
                  Save
                </Button>
              </Flex>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopupAddressForm;
