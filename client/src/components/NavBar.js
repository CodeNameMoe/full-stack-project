import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom"
import "../styles/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function NavBar() {
    const [ExpandNavbar,setExpandNavbar] = useState(false)
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={ExpandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={()=> {setExpandNavbar((prev) => !prev)}}>
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/Weight-Tracker">Weight Tracker</Link>
            <Link to="/BMI-Calculator">BMI Calculator</Link>

        </div>
    </div>
  )
}

export default NavBar