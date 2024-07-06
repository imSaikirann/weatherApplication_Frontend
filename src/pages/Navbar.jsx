import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box
            display="flex"
            flexDirection={{ base: "row", md: "row" }}
            w="100%"
            h={{ base: "auto", md: "100px" }}
            alignItems="center"
            justifyContent="space-between"
            px={{ base: "1rem", md: "7rem" }}
            py={{ base: "1rem", md: "0" }}
            bg="primary.200"
            color='primary.100'
        >
            <Box mb={{ base: "1rem", md: "0" }}>
                <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="700">
                    SkyView
                </Text>
            </Box>

            <Box>
                <Button bg="primary.100" _hover={{ bg: "primary.300" }}>
                    <Text fontSize={{ base: "12px", md: "14px" }} color="primary.200">
                        User
                    </Text>
                </Button>
            </Box>
        </Box>
    );
}
