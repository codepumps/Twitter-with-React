import React, { useEffect } from 'react'
import HomeMain from "../components/Home/HomeMain";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <HomeMain />
        </div>
    )
}

export default Home

