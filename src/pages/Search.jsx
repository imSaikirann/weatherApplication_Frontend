import React, { useEffect, useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { useData } from '../Context/dataContext';
import axios from 'axios';

export default function Search() {
    const { setData } = useData();
    const [city, setCity] = useState('Hyderabad');

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (city.trim() !== '') {
                try {
                    const res = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=bf360855ee084cb7a8d171537240407&q=${city}&days=3&aqi=no&alerts=no`);
                    setData(res.data);
                    console.log(res.data);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            }
        };

        const debounceFetch = setTimeout(() => {
            fetchWeatherData();
        }, 500); 

        return () => clearTimeout(debounceFetch); 
    }, [city, setData]);

    const handleInput = (e) => {
        setCity(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && city.trim() !== '') {
            
        }
    };

    return (
        <Box
            display="flex"
            flexDirection={["column", "row"]}
            w="100%"
            h="80px"
            alignItems="center"
            justifyContent="space-between"
            px={["1rem", "7rem"]}
        >
            <Box w="100%" px={["0.7rem", "0px"]} textAlign={["left", "left"]}>
                <Text fontSize={["18px", "28px"]} color='primary.100'>
                    Good morning !!
                </Text>
            </Box>
            <Box>
                <Input
                    type='text'
                    placeholder='Search by City Name'
                    w={["300px", "600px"]}
                    p='1.3rem'
                    fontSize={["10px", "14px"]}
                    _hover={{
                        border: "1px solid grey",
                    }}
                    _focus={{
                        border: "2px solid grey",
                        boxShadow: "sm",
                    }}
                    boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
            </Box>
        </Box>
    );
}
