// Navbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom"
import { useState } from 'react';

const Navbar = () => {
    const [name, setName] = useState('')
    return (
        <>
        <nav style={{ display: "flex", alignItems: "center", justifyContent:'space-between', backgroundColor: '#333', padding: '10px' }}>
            <NavLink style={{textDecoration: 'none'}} to="/" >
                <p style={{ color: 'white'}}>TaskList</p>
            </NavLink>
            <p style={{ color: 'white'}}>Task Manager</p>
            <div>
                <p style={{ color: 'white'}}>Task Status</p>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
