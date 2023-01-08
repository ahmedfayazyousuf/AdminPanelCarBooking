import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import UserNissan from './components/UserNissan';
import UserInfiniti from './components/UserInfiniti';
import UserChooseCompany from './components/UserChooseCompany';

import Success from './components/Success';
import Error from './components/Error';
import CarStatus from './components/CarStatus';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<UserChooseCompany/>} />
          

          <Route path="/UserNissan" element={<UserNissan />} />
          <Route path="/UserInfiniti" element={<UserInfiniti />} />

          <Route path="/User/:id" element={<CarStatus />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/Error" element={<Error />} />

          {/* <Route path="/user/:user_id" element={<UserPage />} />  */}
      </Routes>
    </>
  )
}
export default App
