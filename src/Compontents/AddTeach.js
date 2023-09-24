import React, { useState } from "react";

import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import BaseApp1 from "../Core/Base1";

export function AddTeach({ teach, setTeach }) {
    const history = useHistory();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");

    const addNewTeach = () => {
        const newTeach = {
            id,
            name,
            email,
            phone,
            experience,
            gender,
            city
        }
        console.log(newTeach);
        setId("");
        setName("");
        setEmail("");
        setPhone("");
        setExperience("");
        setGender("");
        setCity("");
        setTeach([...teach, newTeach])
        history.push('/Teacher')
    }

    return (
        <BaseApp1
            title={"Add A New Teacher Details"}
        >
            <div>
                <input
                    placeholder="id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />

                <input
                    placeholder="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    placeholder="phone no"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />

                <input
                    placeholder="experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                />

                <input
                    placeholder="gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                />

                <input
                    placeholder="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />

                <button
                    onClick={addNewTeach}
                >Add</button>

            </div>
        </BaseApp1>
    )
}