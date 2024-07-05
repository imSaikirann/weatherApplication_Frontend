import React from 'react';
import { Box, Button,  Text } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            w="100%"
            h="100px"
            alignItems="center"
            justifyContent="space-between"
            px={["1rem","7rem"]}
            bg="primary.200"
            color='white'
           
        >
            <Box p="1rem" bg="primary.100"  border="1px solid grey">
                <Text fontSize={["18px","24px"]} fontWeight="500"

                >SkyView</Text>
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
