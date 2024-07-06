import React, { useEffect, useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { useData } from '../Context/dataContext';
import axios from 'axios';

export default function Search() {
    const { setData, setLoading } = useData();
    const [greetings, setGreetings] = useState('morning');
    const [city, setCity] = useState('Hyderabad');

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (city.trim() !== '') {
                try {
                    const res = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=bf360855ee084cb7a8d171537240407&q=${city}&days=7&aqi=no&alerts=yes`);
                    setData(res.data);
                    console.log(res.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            }
        };

        const debounceFetch = setTimeout(() => {
            fetchWeatherData();
        }, 500);

        return () => clearTimeout(debounceFetch);
    }, [city, setData, setLoading]);

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        
        if (hours < 12) {
            setGreetings('morning');
        } else if (hours < 18) {
            setGreetings('afternoon');
        } else if(hours < 21) {
            setGreetings('evening');
        } else {
            setGreetings('night');
        }
        
    }, []); 

    const handleInput = (e) => {
        setCity(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && city.trim() !== '') {
            // You can add any additional logic you want to execute when Enter key is pressed
        }
    };

    return (
        <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            w="full"
            h="auto"
            alignItems="center"
            justifyContent="space-between"
            px={{ base: "1rem", md: "7rem" }}
            py={{ base: "1rem", md: "2rem" }}
        >
            <Box w="full" textAlign={{ base: "left", md: "left" }} mb={{ base: "1rem", md: "0" }}>
                <Text fontSize={{ base: "18px", md: "28px" }} color='primary.100'>
                    Good {greetings}
                </Text>
            </Box>
            <Box w="full" maxW={{ base: "100%", md: "600px" }}>
                <Input
                    type='text'
                    placeholder='Search by City Name'
                    w="full"
                    p={{ base: '1rem', md: '1.3rem' }}
                    fontSize={{ base: "14px", md: "16px" }}
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
