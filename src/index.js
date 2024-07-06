
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';  
import { DataProvider } from './Context/dataContext';
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <DataProvider>
    <App />
    </DataProvider>

  </ChakraProvider>,
  document.getElementById('root')
);
