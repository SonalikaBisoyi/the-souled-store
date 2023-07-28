import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image, Text } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContextProvider';

export default function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [success, setsuccess] = useState(false);
  const [name, setname] = useState('');
  const { handleLogin, setuser } = useContext(AuthContext);

  const HandleLogin = () => {
    // Fetch the local JSON file (userData.json)
    fetch('../userData.json')
      .then((response) => response.json())
      .then((data) => {
        // Check if the user exists in the fetched data
        const user = data.find((el) => el.email === email && el.password === password);

        if (user) {
          setsuccess(true);
          alert('Login Successful');
          setuser(user.name); // Set the user name in the AuthContext
        } else {
          alert('Login Unsuccessful');
        }

        handleLogin();
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  return (
    <Stack marginTop={10} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="enter your register name" value={name} onChange={(e) => setname(e.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="enter your register mail" value={email} onChange={(e) => setemail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="enter your register password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </FormControl>
          <Stack spacing={6}>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <input type="checkbox" /> {/* Add checkbox component from Chakra UI */}
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            {!success ? (
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={HandleLogin}
              >
                Sign in
              </Button>
            ) : (
              <Navigate to="/" />
            )}
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Register with The Souled Apprial <Link to="/register" style={{ color: 'blue' }}>Register</Link>
            </Text>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              The Souled Apprial Admin Login <Link to="/adminlogin" style={{ color: 'blue' }}>Login As Admin</Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
