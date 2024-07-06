import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Image } from '@chakra-ui/react';
import { useData } from '../Context/dataContext'; // Assuming you have a context for data fetching

export default function SevenDayForcast() {
  const { data, isLoading } = useData(); // Replace with your actual data fetching method
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (data?.forecast?.forecastday) {
      setForecast(data.forecast.forecastday);
    }
  }, [data]);

  return (
    <Box
      p={{ base: '1rem', md: '2rem' }}
      bg="primary.200"
      borderRadius="7px"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      maxW={{ base: '100%', md: '1200px' }}
      mx="auto"
    >
      <Text fontSize="2xl" mb="1rem" color="primary.100" fontWeight="bold">
        7-Day Forecast
      </Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <VStack spacing="1rem" align="start">
          {forecast.map((day, index) => (
            <Box
              key={index}
              p="1rem"
              bg="white"
              borderRadius="5px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
              w="100%"
            >
              <Text fontSize="lg" fontWeight="bold">
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
              </Text>
              <Text>Temperature: {day.day.avgtemp_c}°C</Text>
              <Text>Condition: {day.day.condition.text}</Text>
              <Image src={day.day.condition.icon} alt={day.day.condition.text} boxSize="50px" />
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
}
