import React, { useEffect, useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory, useParams } from "react-router-dom";

export const EditUser = ({ user, setUser }) => {
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [sessionTimings, setSessionTimings] = useState("");
    const history = useHistory();
    const { id } = useParams();

    const selectedUser = user.find((per) => per.id === id);

    useEffect(() => {
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setEmail(selectedUser.email)
        setCourse(selectedUser.course)
        setSessionTimings(selectedUser.sessionTimings)

    }, []);

    const updateUser = () => {
        const editIndex = user.findIndex(per => per.id === id)
        console.log(editIndex);
        const editedData = {
            idx,
            name,
            email,
            course,
            sessionTimings

        }
        user[editIndex] = editedData;
        setUser([...user]);
        history.push("/Student")
    }
    return (

        <BaseApp
            title={"Edit The User Details"}
        >
            <div>
                <input
                    placeholder="id"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)} />

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
                    placeholder="course"
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                />

                <input
                    placeholder="sessionTimings"
                    value={sessionTimings}
                    onChange={(event) => setSessionTimings(event.target.value)}
                />

                <button
                    onClick={updateUser}
                >Edit</button>

            </div>
        </BaseApp>

    )
}