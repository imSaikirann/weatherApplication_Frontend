import { Box, Text, Image, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { calender, raincloud, Map } from '../assets/ImgData';

export default function Home() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            px={["1rem", "7rem"]}
          
            gap="1rem"
            color="white"
            bg="primary.200"
        >
            <Text textAlign="left" fontSize="32px">Today's Overview</Text>
            <Box p="1.8rem" border="1px solid gray"  borderRadius='7px' bg="primary.100">
                <VStack align="flex-start">
                    <HStack align="flex-start">
                        <Image src={raincloud} alt="Raincloud" />
                        <Text fontSize="56px" fontWeight="600">25°C</Text>
                    </HStack>
                    <Box w="240px" border="1px solid white" />

                    <VStack>
                        <HStack>
                            <Image src={calender} ></Image>
                            <Text>5 July Friday </Text>
                        </HStack>
                        <HStack>
                            <Image src={Map} ></Image>
                            <Text>Hyderabad </Text>
                        </HStack>
                    </VStack>

                </VStack>
            </Box>
        </Box>
    )
}
