import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import './Home.css'
import Cards from '../Cards/Cards';



const Home = () => {
  return (
    <>
    <div className='home'>
        <div className='home-container'>
            <Header />
            <Hero />
            <Cards />
            <div className='home-container-aboutme'>
                <p>I'm Divya, a beginner full stack developer with some experience in dynamic startup environments.<br />
                I've led end-to-end design projects, focusing on optimizing user experiences and driving<br />
                product evolution.</p>
                <Link to='/about'>
                <button>More About Me...</button>
                </Link>
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Home