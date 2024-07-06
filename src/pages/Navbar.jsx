import React from 'react';
import { Box, Button, Text, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Box >
                <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="700">
                    SkyView
                </Text>
            </Box>

            <Box>
                <Button bg="primary.100" _hover={{ bg: "primary.300" }} onClick={onOpen}>
                    <Text fontSize={{ base: "12px", md: "14px" }} color="primary.200">
                        Menu
                    </Text>
                </Button>
            </Box>

            {/* Drawer Component */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody bg="transparent">
                        <Link to="/"><Text>Home</Text></Link>
                        <Link to="/signup">
                            <Button>
                                <Text>SignUp</Text>
                            </Button></Link>
                          
                     
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
