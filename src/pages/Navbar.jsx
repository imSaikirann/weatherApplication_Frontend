import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            w="100%"
            h="80px"
            alignItems="center"
            justifyContent="space-between"
            px={["1rem","7rem"]}
        >
            <Box>
                <Text fontSize={["18px","24px"]} fontWeight="500"

                >SkyView</Text>
            </Box>
            <Box>
                <Input
                    type='text'
                    placeholder='Search by City Name'
                    w={["180px","500px"]}
                    border="0px"
                    fontSize={["10px","14px"]}
                    _hover={{
                        border: "1px solid grey",
                    }}
                    _focus={{
                        border: "0px",
                        boxShadow: "none",
                    }}
                   
                />
            </Box>
            <Box>
                <Button>

                    <Text fontSize="14px">
                        User</Text>
                        
                        </Button>
            </Box>
        </Box>
    );
}
