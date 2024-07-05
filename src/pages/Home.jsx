import { Box, Text, Image, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import {  raincloud} from '../assets/ImgData';

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
            <Box p="1.8rem" boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)" border="1px solid #C2C3C5" borderRadius='7px'  >
                <VStack align="flex-start">
                    <HStack align="flex-start">
                        <Image src={raincloud} alt="Raincloud" />
                        <Text fontSize="56px" color="primary.100" fontWeight="600">25°C</Text>
                    </HStack>
                    <Box w="240px" boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"/>

                    <VStack>
                        <HStack>
                        
                            <Text>5 July Friday </Text>
                        </HStack>
                        <HStack>
                            
                            <Text>Hyderabad </Text>
                        </HStack>
                    </VStack>

                </VStack>
            </Box>
        </Box>
    )
}
