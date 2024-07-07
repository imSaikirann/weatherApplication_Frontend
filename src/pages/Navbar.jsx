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
        onClose();
    };

    const handleRemove = (value) => {
        const updatedFavs = favData.filter(city => city !== value);
        localStorage.setItem('favcity', JSON.stringify(updatedFavs));
        setFavData(updatedFavs);
    };

    const handleFav = (value) => {
        setFavCity(value);
    };

    const handleAdd = () => {
        if (favCity) {
            const currentFavs = JSON.parse(localStorage.getItem('favcity')) || [];
            const updatedFavs = [...currentFavs, favCity];
            localStorage.setItem('favcity', JSON.stringify(updatedFavs));
            setFavData(updatedFavs);
            setFavCity('');
        }
    };

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
                <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="700">
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
                        <Box 
                        display="flex"
                        flexDirection="column"
                        gap="1rem"
                        alignItems="center"
                        justifyContent="center"
                        w="100%"
                        >
                            <Text fontSize={["14px",'18px']} fontWeight="500">Add your favorite City 🏙️</Text>
                            <Input placeholder="Enter your favorite city" type="text" onChange={(e) => handleFav(e.target.value)} value={favCity}></Input>
                            <Button w="100%" bg="primary.100" color="white" onClick={handleAdd}>Add To Favorite</Button>
                        </Box>
                        <Box mt={8}
                         display="flex"
                         flexDirection="column"
                         gap="1rem"
                         alignItems="center"
                         justifyContent="center"
                         w="100%"
                        >
                        <Text fontSize={["14px",'18px']} fontWeight="500">Favorite Cities</Text>
                            {favData.map((city, index) => (
                                <Box key={index} display="flex" alignItems="center" mt={2}>
                                    <Button  variant='outline' border="1px solid black"  color="primary.100" onClick={() => handleSend(city)}>
                                        <Text fontSize={["14px",'18px']}>{city}</Text>
                                    </Button>
                                    <Button ml={2} onClick={() => handleRemove(city)}>
                                        X
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
