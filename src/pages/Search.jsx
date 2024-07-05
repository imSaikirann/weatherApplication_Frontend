import React from 'react';
import { Box, Input,Text } from '@chakra-ui/react';

export default function Search() {
    return (
        <Box
            display="flex"
            flexDirection={["column","row"]}
            w="100%"
            h="80px"
            alignItems="center"
            justifyContent="space-between"
            px={["1rem", "8rem"]}
         

        >
            <Box>
                <Text fontSize="36px" color='primary.100'>Good morning !!</Text>
            </Box>
            <Box>
                <Input
                    type='text'
                    placeholder='Search by City Name'
                    w={["300px", "600px"]}
                    p='1.3rem'
                    fontSize={["10px", "14px"]}
                    
                    _hover={{
                        border: "1px solid grey",
                    }}
                    _focus={{
                        border: "2px solid grey",
                        boxShadow: "sm",
                    }}
                    boxShadow=" 0px 10px 0px -100px rgba(0,0,0,0.1)"

                />
            </Box>

        </Box>
    );
}
