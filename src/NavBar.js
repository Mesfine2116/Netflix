import React, { Component, useEffect, useState } from 'react';
import Netflix from "./net.png";
import NN from "./NN.png";
import "./NavBar.css";

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src={NN} className='nav_logo' />
        </div>
    );
}

export default NavBar;