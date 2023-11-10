import React from 'react';
import {SimpleCompetitorEntity} from "types";


interface Props {
    competitor: SimpleCompetitorEntity;
}
export const CompetitorTableRow = (props: Props) => {
    return (<tr>
        <td>
            {props.competitor.firstName}
        </td>
        <td>
            {props.competitor.lastName}
        </td>
        <td>
            {props.competitor.sex}
        </td>
        <td>
            {props.competitor.city}
        </td>
        <td>
            {props.competitor.club}
        </td>
    </tr>)
}