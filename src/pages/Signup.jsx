import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';

export default function Signup() {
  return (
    <Box
      w="100%"
      minH="75vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
   
      p={4}  
    >
      <Box
        p={8}
        maxWidth={{ base: '90%', md: '500px' }}  
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
        width="100%"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Signup
        </Heading>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blackAlpha" bg="primary.100" width="full" mt={4}>
            Signup
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
