import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {CompetitionView} from "./views/CompetitionView";
import {Route, Routes} from "react-router-dom";
import {SingleCompetitionView} from "./views/SingleCompetitionView";

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<CompetitionView/>} />
                <Route path="/:idOfCompetition" element={<SingleCompetitionView/>} />
            </Routes>
        </>
    );
};
