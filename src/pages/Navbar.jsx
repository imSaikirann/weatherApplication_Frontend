import React, { useEffect, useState } from 'react';
import {
    Box, Button, Text, Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure,
    Input
} from '@chakra-ui/react';
import { useData } from '../Context/dataContext';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [favCity, setFavCity] = useState('');
    const [favData, setFavData] = useState([]);
    const { setCity } = useData();

    const handleSend = (value) => {
        setCity(value);
        onClose();  // Close the drawer
    }

    const handleFav = (value) => {
        setFavCity(value);
    }

    const handleAdd = () => {
        if (favCity) {
            const currentFavs = JSON.parse(localStorage.getItem('favcity')) || [];
            const updatedFavs = [...currentFavs, favCity];
            localStorage.setItem('favcity', JSON.stringify(updatedFavs));
            setFavData(updatedFavs);
            setFavCity(''); 
        }
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('favcity')) || [];
        setFavData(data);
    }, []);

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
            <Box>
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
                        <Box>
                            <Text>Add favorite City</Text>
                            <Input type="text" onChange={(e) => handleFav(e.target.value)} value={favCity}></Input>
                            <Button onClick={handleAdd}>Add To Favorite</Button>
                        </Box>
                        <Box mt={4}>
                            <Text>Favorite Cities:</Text>
                            {favData.map((city, index) => (
                                <Button key={index} bg="white" onClick={() => handleSend(city)}>
                                    <Text>{city}</Text>
                                </Button>
                            ))}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
