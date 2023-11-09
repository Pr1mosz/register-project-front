import React, {useEffect, useState} from "react";
import { CompetitionEntity } from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {CompetitionListOneItem} from "./CompetitionListOneItem";
import "./CompetitionList.css";

export const CompetitionList = () => {
    const [competitionsList, setCompetitionsList] = useState<CompetitionEntity[] | null> (null);

    const refreshCompetition = async () => {
        setCompetitionsList(null);
        const res = await fetch('http://localhost:3001/competition')
        const data = await res.json();
        setCompetitionsList(data.competitionList);
    };

    useEffect(() => {
        refreshCompetition();
    }, []);

    if (competitionsList === null) {
        return <Spinner/>
    }

    return <ul className="container">
        {competitionsList
            .map(competition => (
            <CompetitionListOneItem competition={competition} key={competition.id}/>
        ))}
    </ul>
}