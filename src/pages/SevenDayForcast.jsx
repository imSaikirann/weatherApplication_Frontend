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
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  px={{ base: "1rem", md: "7rem" }}
    w="100%"
  >
      <Box
      px={{ base: "1rem", md: "7rem" }}
      bg="primary.200"
      borderRadius="7px"
     boxShadow=" 0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)"
      w={{ base: '100%', md: '100%' }}
    
      mt="2rem"
    

    >
      <Text fontSize="2xl" mb="1rem"  mt="1rem" color="primary.100" fontWeight="bold">
        7-Day Forecast
      </Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <VStack spacing="1rem" align="start">
          {forecast.map((day, index) => (
            <Box
              key={index}
              p={["1rem","1rem"]}
              bg="white"
              boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
              border="1px solid #C2C3C5"
              borderRadius="7px"
              w="100%"
              display="flex"
              flexDirection={["column","row"]}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
              <Image src={day.day.condition.icon} alt={day.day.condition.text} boxSize="50px" />
              </Box>
             <Box>
             <Text fontSize="lg" fontWeight="bold">
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
              </Text>
              <Text>Temperature: {day.day.avgtemp_c}°C</Text>
              <Text>Condition: {day.day.condition.text}</Text>
             </Box>
          
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  </Box>
  );
}
