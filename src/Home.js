import Navbar from "./Navbar";
import Footer from "./Footer"
import React, { useEffect, useState } from 'react'


const Home = () => {
    
    const [show, setShow] = useState(true)
    var boxesShown = true
    const controlBoxes = () => {
        if (window.scrollY > (500)) {
            setShow(false)
            boxesShown = false
        } 
        else if (boxesShown) {
            setShow(true)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', controlBoxes)
        return () => {
            window.removeEventListener('scroll', controlBoxes)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="title" >
                <Navbar />
                <div className="titleContent">
                    <h1>Our Mission</h1>
                    <p>At Velocity, our number one priority is you. Our world class engineers work day and night to provide you with the best possible experience on your trip to outer space. We constantly find new ways to optimize your flight experience for more enjoyment and safety. </p>
                </div>
            </div>
            <div className={`box ${show && 'boxShown'}`}>
                <h1>Benefits of traveling to space</h1>
                <ul>
                    <CustomBox text={"Our flights are designed to give you the best experience possible. You get to experience a plethora of things that you wouldn’t be able to experience on Earth, such as 0 gravity."} title={"Experience"}/>
                    <CustomBox text={"Space is a unique beauty, and not many people get to truly experience it. Here at Velocity, we offer a once-in-a-lifetime opportunity to travel to outer space."} title={"Once-In-A-Lifetime"}/>
                    <CustomBox text={"Every flight that leaves one of our spaceports brings humanity one step closer to making space tourism a thing that every human gets to experience. We constantly are finding new ways to improve our flights, and you passengers are what fund our research."} title={"Innovation"}/>
                    <CustomBox text={"The data we collect from our flights are extremely valuable to scientists around the globe, as it can help them discover new things about how the human body reacts to exposure with space. This data can help scientists make new discoveries that improve space tourism for future generations."} title={"Science"}/>
                </ul>
            </div>
            <div className="closing">
                <h2>In conclusion, going to space is an experience like no other. By embarking on one of our spaceships, you not only are giving yourself memories that you will never forget, but you are also helping to improve space tourism for the rest of the world.</h2>
            </div>
            <div className="whyUs">
                <h1>Why Us?</h1>
                <p>Here at Velocity, we take competition very seriously. We are always on the lookout for things that could elevate us above the competition. In order to provide the best space tourism experience out there, we hire top of the line engineers that work to create a perfect blend of safety and entertainment. We also prioritize the affordability of our flights, as we believe this experience is something that everyone should be able to have. From a price of (INSERT PRICE), you can embark on a new, courageous expedition.</p>
            </div>
            <Footer />
            

        </>
    );
}

const CustomBox = ({ text, title, ...props }) => {
    
    return (
        <li>
            <p className="boxContent" {...props}>{text}</p>
            <h2 className="boxTitle" {...props}>{title}</h2>
        </li>
    );
}

export default Home