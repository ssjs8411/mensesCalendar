
import React from 'react';
import CalendarComponent from './src/Calendar/component/CalendarComponent'; 

const App: () => React$Node = () => {
  console.log('어케 띄우는겨');
  return (
    <>
      <CalendarComponent />
    </>
  );
};

export default App;
