import React, {SyntheticEvent, useEffect, useState} from "react";

import './AddCompetitor.css';
import {Btn} from "../common/Btn/Btn";
import {Link, useParams} from "react-router-dom";
import { GetSingleCompetitionRes } from "types";
import {Spinner} from "../common/Spinner/Spinner";

export const AddCompetitor = () => {
    const {idOfCompetition} = useParams();
    const [competitionInfo, setCompetitionInfo] = useState<GetSingleCompetitionRes | null>(null);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        sex: '',
        yearOfBirth: 0,
        mail: '',
        city: '',
        club: '',
        competitionId: `${idOfCompetition}`,
    });

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/competition/${idOfCompetition}`);
            setCompetitionInfo(await res.json());
        })();
    }, []);

    if (competitionInfo === null) {
        return <Spinner/>;
    }
    const saveCompetition = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/competitor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2 className="add_message">Trwa dodawanie zawodnika...</h2>;
    }

    if (id) {
        return <div className="add_message">
            <h2>Zawodnik "{form.firstName} {form.lastName}" został zapisany na zawody "{competitionInfo.competition.name}".</h2>
            <Link to={`/${competitionInfo.competition.id}`}>
                <Btn text="Lista uczestników" />
            </Link>
        </div>
    }

    return (<form className="add-form" onSubmit={saveCompetition}>
        <h1>Zapisy na {competitionInfo.competition.name}</h1>
        {competitionInfo.competition.date.slice(0,10)}, {competitionInfo.competition.city}, {competitionInfo.competition.typeOfRun}
        <br/>
        <p>
            <label>
                Imię: <br/>
                <input
                    type="text"
                    name="firstName"
                    required
                    maxLength={30}
                    value={form.firstName}
                    onChange={e => updateForm('firstName', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Nazwisko: <br/>
                <input
                    type="text"
                    name="lastName"
                    required
                    maxLength={50}
                    value={form.lastName}
                    onChange={e => updateForm('lastName', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Płeć: <br/>
                <select
                    name="sex"
                    required
                    value={form.sex}
                    onChange={e => updateForm('sex', e.target.value)}
                >
                    <option value="">-wybierz-</option>
                    <option value="K">Kobieta</option>
                    <option value="M">Mężczyzna</option>
                    </select>
            </label>
        </p>
        <p>
            <label>
                Rok urodzenia: <br/>
                <input
                    type="number"
                    name="yearOfBirth"
                    required
                    min={1900}
                    max={2020}
                    value={form.yearOfBirth}
                    onChange={e => updateForm('yearOfBirth', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Mail: <br/>
                <input
                    type="email"
                    name="mail"
                    required
                    maxLength={100}
                    value={form.mail}
                    onChange={e => updateForm('mail', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Miasto: <br/>
                <input
                    type="text"
                    name="city"
                    maxLength={100}
                    value={form.city}
                    onChange={e => updateForm('city', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Klub: <br/>
                <input
                    type="text"
                    name="club"
                    maxLength={100}
                    value={form.club}
                    onChange={e => updateForm('club', e.target.value)}
                />
            </label>
        </p>
        <Btn text="Zapisz"/>

    </form>)
}