import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {CompetitionView} from "./views/CompetitionView";
import {Route, Routes} from "react-router-dom";
import {SingleCompetitionView} from "./views/SingleCompetitionView";
import {AddCompetitor} from "./components/AddCompetitor/AddCompetitior";


export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<CompetitionView/>} />
                <Route path="/:idOfCompetition" element={<SingleCompetitionView/>} />
                <Route path="/:idOfCompetition/register" element={<AddCompetitor/>} />
            </Routes>

        </>
    );
};
