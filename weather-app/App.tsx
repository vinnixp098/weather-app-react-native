import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { View } from 'react-native';
import FirstView from './src/views/FirstView';
import SecondView from './src/views/SecondView';
import { AppRoutes } from './src/routes/AppRoutes';

const App = () => {
  return (
    <AppRoutes/>
  );
};

export default App;
