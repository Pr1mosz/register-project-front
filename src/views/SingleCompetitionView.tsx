import React, {useEffect, useState} from "react";
import { GetSingleCompetitionRes } from "types";
import {useParams} from "react-router-dom";
import {Spinner} from "../components/common/Spinner/Spinner";
import {CompetitorTable} from "../components/Competitor/CompetitorTable";
import {CompetitionListOneItem} from "../components/Competition/CompetitionListOneItem";

export const SingleCompetitionView = () => {
    const [competitionInfo, setCompetitionInfo] = useState<GetSingleCompetitionRes | null>(null);
    const {idOfCompetition} = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/competition/${idOfCompetition}`);
            setCompetitionInfo(await res.json());
        })();
    }, [idOfCompetition]);

    if (competitionInfo === null) {
        return <Spinner/>;
    }

    return <>
        <CompetitionListOneItem competition={competitionInfo.competition}/>
        <CompetitorTable competitorsList={competitionInfo.competitorsList}/>
    </>
}