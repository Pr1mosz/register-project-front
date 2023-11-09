import React from "react";
import "./Header.css";
import { Btn } from "../common/Btn/Btn";
import {Link} from "react-router-dom";

export const Header = () => {

    return <header>
            <h1>Zapisz się na zawody</h1>
            <Link to="/">
                <Btn text="Strona główna"/>
            </Link>
        </header>
}