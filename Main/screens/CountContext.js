import React from 'react';

// Add for counting
const CountContext = React.createContext({
  dailyCount: 0,
  monthlyCount: 0,
  incrementCount: () => {},
  setDailyCount: () => {}
});

export default CountContext;

export const CountProvider = ({children}) => {
  const [dailyCount, setDailyCount] = React.useState(0);
  const [monthlyCount, setMonthlyCount] = React.useState(0);

  const incrementCount = () => {
    setDailyCount(prevCount => prevCount + 1);
    // Also increment the monthly count here
    setMonthlyCount(prevCount => prevCount + 1);
  }

  return (
    <CountContext.Provider value={{ dailyCount, monthlyCount, incrementCount, setDailyCount }}>
      {children}
    </CountContext.Provider>
  );
};