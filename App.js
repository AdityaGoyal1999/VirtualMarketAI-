import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginPage from './screens/LoginPage';
import Stores from './screens/Stores';
import StoreView from './screens/StoreView';
import Navigator from './routes/homeStack';


export default function App() {
  return (
    <Navigator />

  );
}

