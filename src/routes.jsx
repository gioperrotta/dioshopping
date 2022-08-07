import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Messages } from './Pages/messages'
import { HomePage } from './Pages/homePage';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/menssagens" element={<Messages/>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}

export default MainRoutes;
