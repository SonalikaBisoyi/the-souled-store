import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import Loader from '../Components/Loader';

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get(`http://localhost:3002/products`)
      .then((res) => {
        setProductData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  };

  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:3002/products/${id}`)
      .then(() => {
        fetchProducts();
        toast({
          title: 'Product Deleted',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        toast({
          title: 'Error Deleting Product',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <div style={{ marginTop: '150px' }}>
      <Box height={'auto'} w={'95%'} margin="auto" marginTop={20}>
        <Flex justifyContent={'space-between'}>
          <Box height={'100%'} margin="auto" w={'100%'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}>
            <Select
              placeholder="Select Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="Mens">Mens</option>
              <option value="Womens">Womens</option>
              <option value="Kids">Kids</option>
            </Select>

            <Table marginTop={10}>
              <Thead>
                <Th>Product ID</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Image</Th>
                <Th>Action</Th>
              </Thead>
              <Tbody>
                {loading ? (
                  <Loader />
                ) : (
                  productData.map((product) => (
                    <Tr key={product.id}>
                      <Td>{product.id}</Td>
                      <Td>{product.name}</Td>
                      <Td>{product.category}</Td>
                      <Td>₹ {product.price}</Td>
                      <Td>
                        <Image src={product.image} alt={product.name} w={10} />
                      </Td>
                      <Td>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                      </Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AdminPage;
