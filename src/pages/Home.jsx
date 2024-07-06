import { Box, Text, Image, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import {  calendar, map } from '../assets/ImgData';
import { useData } from '../Context/dataContext';

export default function Home() {
    const { data } = useData();
    console.log(data);

    const location = data?.location?.name || 'Unknown Location';
    const temperature = data?.current?.temp_c || 'N/A';
    const formattedTemperature = typeof temperature === 'number'
        ? temperature.toString().replace(/(\d{2})/g, '$1°')
        : 'N/A';
    const finalTemp = formattedTemperature.split('.')[0];
    const current_date = data?.current?.last_updated || 'N/A';
    const dateMatch = current_date.match(/^\d{4}-\d{2}-\d{2}/);
    const date = dateMatch ? dateMatch[0] : 'N/A';
    console.log(date);

    const icon = data?.current?.condition?.icon || 'N/A';
    console.log(icon);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent="flex-start"
            px={{ base: "1rem", md: "7rem" }}
            gap="1rem"
            color="white"
            bg="primary.200"
            w="100%"
        >
            <Box
                mt="1rem"
                color="primary.100"
                p={{ base: "1rem", md: "1.8rem" }}
                boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                border="1px solid #C2C3C5"
                borderRadius="7px"
                w={{ base: "100%", md: "auto" }}
                maxW={{ base: "100%", md: "400px" }}
            >
                <VStack align="flex-start" spacing="1rem">
                    <HStack align="flex-start" spacing="1rem">
                        <Image src={icon} alt="Weather Icon" boxSize={{ base: "50px", md: "75px" }} />
                        <Text fontSize={{ base: "36px", md: "56px" }} fontWeight="600">{finalTemp}</Text>
                    </HStack>
                    <Box w="240px" boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)" />
                    <VStack align="center" spacing="0.5rem">
                        <HStack spacing="2rem">
                            <Image src={calendar} boxSize={{ base: "20px", md: "25px" }} />
                            <Text fontSize={{ base: "14px", md: "16px" }}>{date}</Text>
                        </HStack>
                        <HStack spacing="2rem">
                            <Image src={map} boxSize={{ base: "20px", md: "25px" }} />
                            <Text fontSize={{ base: "14px", md: "16px" }}>{location}</Text>
                        </HStack>
                    </VStack>
                </VStack>
            </Box>
        </Box>
    );
}
