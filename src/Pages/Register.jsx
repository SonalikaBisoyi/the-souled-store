import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, HStack, Stack, Heading, Text } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [age, setage] = useState(10);
  const [regsuccess, setregsuccess] = useState(false);

  const handleLogin = () => {
    const obj = {
      name,
      age,
      email,
      password,
    };
    console.log(obj);

    //Send the user data to the userData
    fetch('../userData.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.status === 200) {
          setregsuccess(true);
        } else {
          alert('Error registering user');
        }
      })
      .catch((error) => {
        console.error('Error adding user data:', error);
        alert('Error registering user');
      });
  };
  // localStorage.setItem('userData', JSON.stringify(obj));
  //   setregsuccess(true);
  // };

  if (regsuccess) {
    return <Navigate to="/login" />;
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="enter name" onChange={(e) => setname(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Age</FormLabel>
                  <Input type="number" placeholder="enter age" onChange={(e) => setage(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="enter email" onChange={(e) => setemail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="enter password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login" style={{ color: 'blue' }}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
