import React, {SyntheticEvent, useState} from "react";

import './AddCompetition.css';
import {Btn} from "../common/Btn/Btn";

export const AddCompetition = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        date: '',
        city: '',
        typeOfRun: '',

    });

    const saveCompetition = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/competition', {
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
    }


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2 className="add_message">Trwa dodawanie zawodów...</h2>;
    }

    if (id) {
        return <div className="add_message">
            <h2>Twoje zawody "{form.name}" zostały poprawnie dodoane do serwisu pod ID: {id}.</h2>

        </div>

    }

    return (<form className="add-form" onSubmit={saveCompetition}>
        <h1>Dodawanie zawodów</h1>
        <p>
            <label>
                Nazwa zawodów: <br/>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Data zawodów: <br/>
                <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={e => updateForm('date', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Miejsce zawodów: <br/>
                <input
                    type="text"
                    name="city"
                    required
                    maxLength={50}
                    value={form.city}
                    onChange={e => updateForm('city', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Rodzaj biegu: <br/>
                <input
                    type="text"
                    name="typeOfRun"
                    required
                    maxLength={50}
                    value={form.typeOfRun}
                    onChange={e => updateForm('typeOfRun', e.target.value)}
                />
            </label>
        </p>
    <Btn text="Zapisz"/>

    </form>)
}