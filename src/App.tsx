import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {CompetitionView} from "./views/CompetitionView";
import {Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<CompetitionView/>} />
            </Routes>

        </>
    );
};
