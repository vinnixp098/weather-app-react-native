import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { View } from 'react-native';
import FirstView from './src/views/FirstView';
import SecondView from './src/views/SecondView';

const App = () => {
  return (
    <NativeRouter>
        <Routes>
          <Route path="/" element={<FirstView />} />
          <Route path="/SecondView" element={<SecondView />} />
        </Routes>
    </NativeRouter>
  );
};

export default App;
