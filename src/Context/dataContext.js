import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [city, setCity] = useState('Hyderabad');

  return (
    <DataContext.Provider value={{city, setCity, data, setData ,isLoading, setLoading}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
