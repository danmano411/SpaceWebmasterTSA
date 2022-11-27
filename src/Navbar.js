import { Link, useMatch, useResolvedPath     } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import MyImage from './images/spacetsalogo.png'

const Navbar = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            setShow(false)
        } 
        else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return(
        <div className={`topnav ${show && 'topnav_disappear'}`}>
            <ul>
                <div className='topnav_image'>
                    <Link to="/" className="home-text"><img src={MyImage} alt="logo" /></Link>
                </div>
            </ul>
            <ul>
                <CustomLink to="/theFlight"><b>The Flight</b></CustomLink>
                <CustomLink to="/yourTrip"><b>Your Trip</b></CustomLink>
            </ul>
        </div>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    
    return (
        <li className={isActive ? "active" : "inactive"}>
            <Link className={isActive ? "active" : "inactive"} to={to} {...props}>{children}</Link>
        </li>
    );
}

export default Navbar