import React, { useState } from 'react';
import Hero from '../Sections/HomePage/Hero';
import NavBar from '../Sections/HomePage/NavBar';


const HomePage = () => {
    // const [ auth, setAuth ] = useState(false)

    return (
        <>
            <NavBar/>
            <Hero />
        </>
    )

}

export default HomePage;
