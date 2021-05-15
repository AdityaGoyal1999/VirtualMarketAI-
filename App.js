import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginPage from './screens/LoginPage';
import Stores from './screens/Stores';
import StoreView from './screens/StoreView';
import About from './screens/About';
import PaymentSucessfull from './screens/PaymentSucessfull';

export default function App() {
  return (
    <LoginPage />
    // <Stores />
    // <StoreView />
    //<About />
    //<PaymentSucessfull />
  );
}

