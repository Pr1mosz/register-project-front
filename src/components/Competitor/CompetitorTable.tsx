import React from 'react';

import { SimpleCompetitorEntity } from "types";
import {CompetitorTableRow} from "./CompetitorTableRow";
import "./CompetitorTable.css"

interface Props {
    competitorsList: SimpleCompetitorEntity[];
}
export const CompetitorTable = (props: Props) => {
    return <>
        <table>
            <thead>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Płeć</th>
                <th>Miasto</th>
                <th>Klub</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.competitorsList.map(competitor => (
                        <CompetitorTableRow competitor={competitor} key={competitor.id}/>
                        ))
                }
            </tbody>
        </table>
    </>
}