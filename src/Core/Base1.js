import React from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function BaseApp1({ title, styles, children }) {
    const history = useHistory();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>

                        <button className="nav-btn"
                            onClick={() => history.push("/add/teach")}
                        >Add Teach</button>
                    </span>
                    <span>
                        <button className="nav-btn"
                            onClick={() => history.push("/Teacher")}
                        >Teacher Dashboard</button>
                    </span>
                    <span>
                        <button className="nav-btn"
                            onClick={() => history.push("/")}
                        >Home</button>
                    </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="childred">{children}</div>
            <footer>
                <p>Copyright © Your Website 2023</p>
            </footer>
        </div>
    )
}