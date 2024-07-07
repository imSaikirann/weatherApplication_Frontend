import React, { useMemo } from 'react';
import { Box, Skeleton, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useData } from '../Context/dataContext';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DayForcast() {
  const { data, isLoading } = useData();
  const Day_hours = useMemo(() => data?.forecast?.forecastday?.[0]?.hour || [], [data]);

  const labels = useMemo(() => Day_hours.map(hour => hour.time.split(' ')[1]), [Day_hours]);
  const temperatures = useMemo(() => Day_hours.map(hour => hour.temp_c), [Day_hours]);
  const chartData = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'primary.100',
        pointBorderColor: 'primary.100',
        pointHoverBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
      },
    ],
  }), [labels, temperatures]);

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  return (
    <Box
      display="flex"
      flexDirection={["column", "row"]}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={["center", "flex-start"]}
      px={{ base: "1rem", md: "7rem" }}
      bg="primary.200"
      w="100%"
       gap="1rem"
    >
      <Box
        mt="1rem"
        color="primary.100"
        p={{ base: "2rem", md: "1.8rem" }}
        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
        border="1px solid #C2C3C5"
        borderRadius="7px"
        w={{ base: "350px", md: "900px" }}
        h={{ base: "200px", md: "400px" }}
       
      >
        <Skeleton isLoaded={!isLoading} height="100%" width="100%">
          <Line data={chartData} options={options}  />
        </Skeleton>
      </Box>
      <Box
        mt="1rem"
        color="primary.100"
        p={{ base: "2rem", md: "1.8rem" }}
        boxShadow="0px 10px 0px -100px rgba(0,0,0,0.1)"
        border="1px solid #C2C3C5"
        borderRadius="7px"
        w={{ base: "100%", md: "400px" }}
        maxW={{ base: "100%", md: "400px" }}
        h={{ base: "700px", md: "400px" }}
        overflowY="auto" 
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2rem"
           
          
        >
          <Box textAlign="left"> 
            <Text>Time</Text>
            {labels.map((label, index) => (
              <Text mt="1rem" key={index}>{label}</Text>
            ))}
          </Box>
          <Box textAlign="left">
          <Text>Temperature</Text>
            {temperatures.map((temp, index) => (
              <Text mt="1rem" key={index}>{temp}°C</Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
