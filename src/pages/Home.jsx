import { Box, Text, Image, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { raincloud, calendar, map } from '../assets/ImgData';
import {useData} from '../Context/dataContext'

export default function Home() {
    const {data} = useData()
    console.log(data)

    const location = data?.location?.name || 'Unknown Location';
    const temperature = data?.current?.temp_c || 'N/A';
    const formattedTemperature = typeof temperature === 'number'
        ? temperature.toString().replace(/(\d{2})/g, '$1°')
        : 'N/A';
    const finalTemp = formattedTemperature.split('.')[0]
    const current_date = data?.current?.last_updated || 'N/A';
    const dateMatch = current_date.match(/^\d{4}-\d{2}-\d{2}/);
    const date = dateMatch ? dateMatch[0] : 'N/A';
    console.log(date);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems={["center", "flex-start"]}
            justifyContent="flex-start"
            px={["1rem", "7rem"]}
            gap="1rem"
            color="white"
            bg="primary.200"
            w="100%"
        >
            <Box
                mt="1rem"
                color="primary.100"
                p="1.8rem"
                boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                border="1px solid #C2C3C5"
                borderRadius='7px'
                w={["100%", "auto"]}
            >
                <VStack align="flex-start" spacing="1rem">
                    <HStack align="flex-start" spacing="1rem">
                        <Image src={raincloud} alt="Raincloud" />
                        <Text fontSize="56px" fontWeight="600">{finalTemp }</Text>
                    </HStack>
                    <Box w="240px" boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)" />
                    <VStack align="center" spacing="0.5rem">
                        <HStack spacing="2rem">
                            <Image src={calendar} w="25px" h="25px" />
                            <Text>{date}</Text>
                        </HStack>
                        <HStack spacing="2rem">
                            <Image src={map} w="25px" h="25px" />
                            <Text>{location}</Text>
                        </HStack>
                    </VStack>
                </VStack>
            </Box>
        </Box>
    );
}
