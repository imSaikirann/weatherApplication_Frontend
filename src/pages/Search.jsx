import React from 'react';
import { Box,  Input, } from '@chakra-ui/react';

export default function Search() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            w="100%"
            h="80px"
            alignItems="center"
            justifyContent="center"
            px={["1rem","7rem"]}
            bg="primary.200"
        >
         
            <Box>
                <Input
                    type='text'
                    placeholder='Search by City Name'
                    w={["300px","600px"]}
                    p='1.3rem'
                    fontSize={["10px","14px"]}
                    border="1px solid grey"
                    _hover={{
                        border: "1px solid grey",
                    }}
                    _focus={{
                        border: "2px solid grey",
                        boxShadow: "sm",
                    }}
                   
                />
            </Box>
            
        </Box>
    );
}
