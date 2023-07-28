import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const SizeNotAvailableModal = ({ sizes, onClose }) => {
  const [isNotifyMeClicked, setNotifyMeClicked] = useState(false);

  const handleNotifyMeClick = () => {
    // Here you can implement the logic to notify the user or perform any other action
    setNotifyMeClicked(true);
  };

  return (
    <Modal isOpen={true} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Notify Me - Unavailable Sizes</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Display the unavailable size buttons */}
          {sizes.map((size) => (
            <Button key={size} size="sm" variant="outline" colorScheme="red" mb="2">
              {size}
            </Button>
          ))}
        </ModalBody>
        <ModalFooter>
          {/* Display the "Notify Me" success alert when the button is clicked */}
          {isNotifyMeClicked ? (
            <Alert status='success' borderRadius="md">
              <AlertIcon />
              <Box flex="1" ml="2">
                <AlertTitle>Your notification has been received!</AlertTitle>
                <AlertDescription>
                  We will review your request and get back to you soon.
                </AlertDescription>
              </Box>
              <Button size="sm" onClick={onClose}>
                Close
              </Button>
            </Alert>
          ) : (
            <Button size="sm" colorScheme="blue" onClick={handleNotifyMeClick}>
              Notify Me
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SizeNotAvailableModal;
