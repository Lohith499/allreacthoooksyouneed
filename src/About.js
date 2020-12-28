import React, {useState,useEffect} from 'react'
import {useHistory,useLocation,useParams,useRouteMatch, Link} from 'react-router-dom';
export default function About() {

    let history=useHistory();
    let location=useLocation();
    let params=useParams();
    useEffect(() => {
        console.log(history)
        console.log(location)
        console.log(params)
       
    }, [])
    return (
        <div>
        <div>
            <p>This is About</p>
        </div>

        <div>
            {location.state.fromDashboard && <p>Hello</p>}
            <Link onClick={e=>history.push("/")}>Goto Home</Link>
        </div>
        </div>
    )
}
