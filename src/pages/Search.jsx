import React, { useEffect, useState } from 'react';
import { Box, Input, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { useData } from '../Context/dataContext';
import axios from 'axios';

export default function Search() {
    const { setData, setLoading, city, setCity } = useData();
    const [greetings, setGreetings] = useState('morning');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (city.trim() !== '') {
                try {
                    setLoading(true);
                    const res = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=bf360855ee084cb7a8d171537240407&q=${city}&days=7&aqi=no&alerts=yes`);
                    setData(res.data);
                    setError('');
                    setLoading(false);
                } catch (error) {
                    setError('Error fetching weather data. Please check the city name and try again.');
                    setLoading(false);
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
            setGreetings('morning 🌄');
        } else if (hours < 18) {
            setGreetings('afternoon 🌞');
        } else if (hours < 21) {
            setGreetings('evening 🌇');
        } else {
            setGreetings('night 🌃');
        }
    }, []);

    const handleInput = (e) => {
        setCity(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && city.trim() === '') {
            setError('City name cannot be empty.');
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
                {error && (
                    <Alert status="error" mb={4}>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                <Input
                    type='text'
                    placeholder='Search by City Name'
                    w="full"
                    p={{ base: '1rem', md: '1.3rem' }}
                    fontSize={{ base: "14px", md: "16px" }}
                    sx={{
                        '&:focus': {
                            border: '0',
                            outline: 'none',
                            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
                        },
                    }}
                    boxShadow="0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12)"
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
            </Box>
        </Box>
    );
}
