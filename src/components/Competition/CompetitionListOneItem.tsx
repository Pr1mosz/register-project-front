import React from "react";
import {CompetitionEntity} from "types";
import "./CompetitionListOneItem.css";
import {Btn} from "../common/Btn/Btn";
import {Link} from "react-router-dom";

interface Props {
    competition: CompetitionEntity;
}

export const CompetitionListOneItem = (props: Props) => {
    return (

            <div className="competition">
                <div className="competition_data">
                    <strong className="competition_name">{props.competition.name}</strong>
                    <br/> {props.competition.date.slice(0,10)}, {props.competition.city}, {props.competition.typeOfRun}
                </div>
                <div className="competition_buttons">
                    <Link to={`/${props.competition.id}`}>
                        <Btn text="Lista uczestników" />
                    </Link>
                    <Btn text="Zapisz się"/>
                </div>
            </div>

    )
}