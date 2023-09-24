import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BaseApp1 from "../Core/Base1";

export const EditTeach = ({ teach, setTeach }) => {

    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const history = useHistory();

    const { id } = useParams();

    const selectTeach = teach.find((per) => per.id === id)

    useEffect(() => {
        setIdx(selectTeach.id)
        setName(selectTeach.name)
        setEmail(selectTeach.email)
        setPhone(selectTeach.phone)
        setExperience(selectTeach.experience)
        setGender(selectTeach.gender)
        setCity(selectTeach.city)

    }, []);

    const updateTeach = () => {
        const editIndex = teach.findIndex(per => per.id === id);

        const editedData = {
            id,
            name,
            email,
            phone,
            experience,
            gender,
            city
        }
        teach[editIndex] = editedData;
        setTeach([...teach]);
        history.push('/Teacher')
        console.log(teach);
    }

    return (
        <BaseApp1
            title={"Edit The Teacher Details"}
        >
            <div>
                <input
                    placeholder="id"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)}
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
                    onClick={updateTeach}
                >Edit</button>

            </div>
        </BaseApp1>
    )
}