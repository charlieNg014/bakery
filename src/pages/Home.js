import React from 'react'
import StyledImage from "../components/StyledImage"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import Story from "../components/Story"
import Menu from "../components/Menu"
import Contact from '../components/Contact'
import Info from "../components/Info"
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <StyledImage>
            <Banner title="Super Delicious Cake" subtitle="100% Natural, fresh baked goods">
                <Link to="/booking" className="btn-primary" style={{backgroundColor: "peru"}}>
                    Book Now
                </Link>
            </Banner>
            </StyledImage>
            <Services />
            <Story />
            <Menu />
            <Contact />
            <Info />
            <Footer />
        </div>
    )
}

export default Home
