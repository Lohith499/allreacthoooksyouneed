import React,{useState} from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    const [hstate, sethstate] = useState(true)
    return (
        <div>
            <p>This is Home</p>

            <Link
                to={{
                    pathname: "/about",
                    search: "?sort=name",
                    state: { fromDashboard: hstate }
                }}
            >Hello</Link>
        </div>
    )
}
