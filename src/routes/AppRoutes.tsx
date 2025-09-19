import React from 'react';
import { NativeRouter, Route, Routes } from "react-router-native";
import FirstView from "../views/FirstView";
import SecondView from "../views/SecondView";

export const AppRoutes  = () => {
    return (
        <NativeRouter>
        <Routes>
          <Route path="/" element={<FirstView />} />
          <Route path="/SecondView" element={<SecondView />} />
        </Routes>
    </NativeRouter>
    );
    }