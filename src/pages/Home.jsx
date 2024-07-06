import React from 'react';
import { Box, Image, HStack, VStack, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { calendar, map } from '../assets/ImgData';
import { useData } from '../Context/dataContext';
import { hum, wind, Pre, vi, Sunrise, Sunset } from '../assets/ImgData';

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
    const pressure = data?.current?.pressure_in;
    const wind_speed = data?.current?.wind_kph;
    const visibilty_distance = data?.current?.vis_km;
    const sunrise_time = data?.forecast?.forecastday?.[0]?.astro?.sunrise;
    const sunset_time = data?.forecast?.forecastday?.[0]?.astro?.sunset;
   



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
                p={{ base: "2rem", md: "1.8rem" }}
                boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                border="1px solid #C2C3C5"
                borderRadius="7px"
                w={{ base: "100%", md: "auto" }}
                maxW={{ base: "100%", md: "700px" }}
            >
                <VStack align="flex-start" spacing="1rem">
                    <HStack align="flex-start" spacing="0.5rem">
                        <Image src={icon} alt="Weather Icon" boxSize={{ base: "50px", md: "75px" }} />
                        <Text fontSize={{ base: "36px", md: "50px" }} fontWeight="600">{formattedTemperature}</Text>
                    </HStack>
                    <Box w="100%" h='1px' bg="primary.100" border="2px solid primary.100" ></Box>
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
                        w={{ base: "auto", md: "250px" }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems={["center", "flex-start"]}
                            justifyContent={["center", "flex-start"]}
                            p={{ base: "0.8rem", md: "0rem" }}
                            w={{ base: "auto", md: "250px" }}
                            gap="1rem"
                        >
                            <Box>
                                <Image w={{ base: "30px", md: "30px" }} h={{ base: "30px", md: "30px" }} src={wind}></Image>
                            </Box>
                            <Box >
                                <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Wind </Text>
                                <Text fontWeight="700">{wind_speed} km/h</Text>
                            </Box>
                        </Box>



                    </Box>
                    <Box
                        color="primary.100"
                        p={{ base: "0.2rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"
                    >

                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems={["center", "flex-start"]}
                            justifyContent={["center", "flex-start"]}
                            p={{ base: "0.8rem", md: "0rem" }}
                            w={{ base: "auto", md: "200px" }}
                            gap="1rem"
                        >

                            <Box>
                                <Image w={{ base: "30px", md: "30px" }} h={{ base: "30px", md: "30px" }} src={hum}></Image>
                            </Box>
                            <Box>
                                <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Humidity</Text>
                                <Text fontWeight="700">{humidity}%</Text>
                            </Box>
                        </Box>


                    </Box>

                </Box>
                <Box flex="1" display="flex" flexDirection="column" >

                    <Box
                        color="primary.100"
                        p={{ base: "0.1rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"
                        w={{ base: "auto", md: "250px" }}

                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems={["center", "flex-start"]}
                            justifyContent={["center", "flex-start"]}
                            p={{ base: "0.8rem", md: "0rem" }}
                            w={{ base: "auto", md: "200px" }}
                            gap="1rem"
                        >
                            <Box>
                                <Image w={{ base: "30px", md: "30px" }} h={{ base: "30px", md: "30px" }} src={Pre}></Image>
                            </Box>
                            <Box>
                                <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Pressure</Text>
                                <Text fontWeight="700">{pressure} Hpa</Text>
                            </Box>

                        </Box>



                    </Box>
                    <Box
                        color="primary.100"
                        p={{ base: "0.1rem", md: "1rem" }}
                        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                        border="1px solid #C2C3C5"
                        borderRadius="7px"
                        mb="1rem"

                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems={["center", "flex-start"]}
                            justifyContent={["center", "flex-start"]}
                            p={{ base: "0.8rem", md: "0rem" }}
                            w={{ base: "auto", md: "200px" }}
                            gap="1rem"
                        >
                            <Box>
                                <Image w={{ base: "30px", md: "30px" }} h={{ base: "30px", md: "30px" }} src={vi}></Image>
                            </Box>
                            <Box>
                                <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Visibility</Text>
                                <Text fontWeight="700">{visibilty_distance} Km</Text>
                            </Box>
                        </Box>

                    </Box>

                </Box>

            </Box>
            <Box
                mt="1rem"
                color="primary.100"
                display="flex"
                flexDirection={{ base: "row", md: "column" }}
                p={{ base: "2rem", md: "1.8rem" }}
                boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                border="1px solid #C2C3C5"
                borderRadius="7px"
                w={{ base: "100%", md: "auto" }}
                maxW={{ base: "100%", md: "400px" }}
                gap= {["1rem","0rem"]}
            >
                <Box
                    color="primary.100"
                    p={{ base: "0.6rem", md: "1rem" }}
                    boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                    border="1px solid #C2C3C5"
                    borderRadius="7px"
                    mb="1rem"
                    w={{ base: "auto", md: "250px" }}
                >
                    <Box
                        display="flex"
                        flexDirection={["column","row"]}
                        alignItems={["center", "flex-start"]}
                        justifyContent={["center", "flex-start"]}
                        p={{ base: "0.8rem", md: "0rem" }}
                        w={{ base: "auto", md: "250px" }}
                        gap="1rem"
                    >
                        <Box>
                            <Image w={{ base: "30px", md: "30px" }} h={{ base: "30px", md: "30px" }} src={Sunrise}></Image>
                        </Box>
                        <Box >
                            <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Sunrise</Text>
                            <Text fontWeight="700">{sunrise_time}</Text>
                        </Box>
                    </Box>



                </Box>
                <Box
                    color="primary.100"
                    p={{ base: "0.6rem", md: "1rem" }}
                    boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                    border="1px solid #C2C3C5"
                    borderRadius="7px"
                    mb="1rem"
                    w={{ base: "auto", md: "250px" }}
                   
                >
                    <Box
                        display="flex"
                        flexDirection={["column","row"]}
                        alignItems={["center", "flex-start"]}
                        justifyContent={["center", "flex-start"]}
                        p={{ base: "0.8rem", md: "0rem" }}
                        w={{ base: "auto", md: "250px" }}
                        gap= {["1rem","1rem"]}
                    >
                        <Box>
                            <Image w={{ base: "30px", md: "30px" }} h={{ base: "30px", md: "30px" }} src={Sunset}></Image>
                        </Box>
                        <Box >
                            <Text fontWeight="400" fontSize={{ base: "14px", md: "14px" }}>Sunrise</Text>
                            <Text fontWeight="700">{sunset_time} </Text>
                        </Box>
                    </Box>



                </Box>
            </Box>


        </Box>
    );
}
