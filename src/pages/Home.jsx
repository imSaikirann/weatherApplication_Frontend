import React from 'react';
import { Box, Image, HStack, VStack, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { calendar, map } from '../assets/ImgData';
import { useData } from '../Context/dataContext';
import { hum } from '../assets/ImgData';

export default function Home() {
    const { data, isLoading } = useData();

    const placeholderIcon = 'path/to/placeholder-icon.png';
    const placeholderDate = 'N/A';
    const placeholderLocation = 'Unknown Location';
    const placeholderTemp = 'N/A';

    if (isLoading) {
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
                            <Skeleton boxSize={{ base: "50px", md: "75px" }} borderRadius="full" />
                            <Skeleton height={{ base: "36px", md: "56px" }} width="100px" />
                        </HStack>
                        <Box w="240px" boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)" />
                        <VStack align="center" spacing="0.5rem">
                            <HStack spacing="2rem">
                                <Skeleton boxSize={{ base: "20px", md: "25px" }} borderRadius="full" />
                                <SkeletonText noOfLines={1} width="80px" />
                            </HStack>
                            <HStack spacing="2rem">
                                <Skeleton boxSize={{ base: "20px", md: "25px" }} borderRadius="full" />
                                <SkeletonText noOfLines={1} width="120px" />
                            </HStack>
                        </VStack>
                    </VStack>
                </Box>
            </Box>
        );
    }

    // Process and display data when not loading
    const location = data?.location?.name || placeholderLocation;
    const temperature = data?.current?.temp_c || placeholderTemp;
    const formattedTemperature = typeof temperature === 'number'
        ? `${temperature.toFixed(1)}°C`
        : placeholderTemp;
    const current_date = data?.current?.last_updated || placeholderDate;
    const dateMatch = current_date.match(/^\d{4}-\d{2}-\d{2}/);
    const date = dateMatch ? dateMatch[0] : placeholderDate;
    const icon = data?.current?.condition?.icon || placeholderIcon;
    const humidity = data?.current?.humidity;

    return (
        <Box
            display="flex"
            flexDirection={["column", "row"]}
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
                maxW={{ base: "100%", md: "700px" }}
            >
                <VStack align="flex-start" spacing="1rem">
                    <HStack align="flex-start" spacing="1rem">
                        <Image src={icon} alt="Weather Icon" boxSize={{ base: "50px", md: "75px" }} />
                        <Text fontSize={{ base: "36px", md: "56px" }} fontWeight="600">{formattedTemperature}</Text>
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

            <Box
                mt={{ base: '0.3rem', md: '1rem' }}
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
                color="primary.100"
                p={{ base: "1rem", md: "1.8rem" }}
                boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                border="1px solid #C2C3C5"
                borderRadius="7px"
                w={{ base: "100%", md: "auto" }}
                maxW={{ base: "100%", md: "700px" }}
                gap="1rem"
            >
                <Box flex="1" display="flex" flexDirection="column">

                    <Box
                        color="primary.100"
                        p={{ base: "0.2rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"
                    >
                       <HStack>
                        <Box>
                            <Image src={hum}></Image>
                        </Box>
                       <Box>
                       <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Humidity</Text>
                       <Text fontWeight="700">{humidity}%</Text>
                       </Box>
                       </HStack>

                    </Box>
                    <Box
                        color="primary.100"
                        p={{ base: "0.2rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"
                    >
                        <HStack>
                        <Box>
                            <Image src={hum}></Image>
                        </Box>
                       <Box>
                       <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Humidity</Text>
                       <Text fontWeight="700">{humidity}%</Text>
                       </Box>
                       </HStack>

                    </Box>

                </Box>
                <Box flex="1" display="flex" flexDirection="column">

                    <Box
                        color="primary.100"
                        p={{ base: "0.2rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"
                    >
                       <HStack>
                        <Box>
                            <Image src={hum}></Image>
                        </Box>
                       <Box>
                       <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Humidity</Text>
                       <Text fontWeight="700">{humidity}%</Text>
                       </Box>
                       </HStack>

                    </Box>
                    <Box
                        color="primary.100"
                        p={{ base: "0.2rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"
                    >
                     <HStack>
                        <Box>
                            <Image src={hum}></Image>
                        </Box>
                       <Box>
                       <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Humidity</Text>
                       <Text fontWeight="700">{humidity}%</Text>
                       </Box>
                       </HStack>

                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
