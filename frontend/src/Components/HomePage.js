import React, { useState } from 'react';
import Hero from '../Sections/HomePage/Hero';
import NavBar from '../Sections/HomePage/NavBar';
import Footer from '../Sections/HomePage/Footer';


const HomePage = () => {
    // const [ auth, setAuth ] = useState(false)

    return (
        <>
            <NavBar/>
            <Hero />
            <Footer />
        </>
    )

}

export default HomePage;
