import React from "react";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BaseApp1 from "../Core/Base1";

export function TeachDetails({ teach }) {
    const { id } = useParams();
    const person = teach[id]
    return (
        <BaseApp1
            title={"View The Teacher"}
        >
            <div className="user-content">

                <table>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Experience</th>
                            <th>Gender</th>
                            <th>City</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                            <td>{person.experience}</td>
                            <td>{person.gender}</td>
                            <td>{person.city}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </BaseApp1>
    )
}