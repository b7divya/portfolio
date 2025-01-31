import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './About.css'
import Divya from '../../Images/Divya.png'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='about'>
        <div className='about-container'>
            <Header />
            <div className='about-container-title'>
    Front-End Developer crafting dynamic,<br /> user-focused 
    web applications with modern technologies.
</div>
<div className='about-container-desc'>
    I'm Divya, a front-end developer passionate about building seamless digital experiences. <br />
    With expertise in <strong>React.js, JavaScript, HTML, CSS, and API integration</strong>, I develop responsive <br />
    and high-performing applications that prioritize usability and performance.<br />
    <br />
    I specialize in creating interactive UIs, implementing efficient state management, and optimizing <br />
    web accessibility. Leveraging <strong>Firebase Authentication</strong>, I enhance user authentication <br />
    flows for secure and scalable applications. My experience with <strong>GIT & GitHub</strong> ensures version <br />
    control and collaborative development, while my knowledge of <strong>SEO best practices</strong> helps improve <br />
    web visibility and performance.<br />
    <br />
    In previous roles, I have contributed to UI development that enhanced user engagement and retention. <br />
    I focus on <strong>API integration</strong> to connect front-end applications with dynamic data sources, ensuring <br />
    real-time updates and a seamless user experience.<br />
    <br />
    My expertise lies in translating design concepts into functional, high-quality interfaces, ensuring <br />
    cross-browser compatibility, and collaborating with teams to build scalable web solutions.<br />
</div>
            <div className='about-container-image'>
                <img src={Divya} alt="full Stack developer" />
            </div>
            <div className='about-container-experience'>
                Work Experience
                <div className='about-container-experience-column'>
                    <div className='about-container-experience-column-2'>
                        <h2>Frontend Developer</h2>
                        <h5>CodeSoft (Intern)</h5>
                        <h5>2024</h5>
                    </div>
                    <div className='about-container-experience-column-2'>
                        <h2>Digital Markerter</h2>
                        <h5>Freelance</h5>
                        <h5>2018-2023</h5>
                    </div>
                </div>
            </div>
            <div className='about-container-education'>
                Education
                <div className='about-container-education-container'>
                    <div className='about-container-education-graduation'>
                        <h3>Bachelor of Engineering</h3>
                        <h5>Electrical Engineering</h5>
                        <h5>2015-2018</h5>
                    </div>
                    <div className='about-container-education-diploma'>
                        <h3>Polytechnic Diploma</h3>
                        <h5>Electrical Engineering</h5>
                        <h5>2012-2015</h5>
                    </div>
                    <div className='about-container-education-secondry'>
                        <h3>Secondry Education</h3>
                        <h5>English, Hindi, Maths, Science, SocialStudies</h5>
                        <h5>2011-12</h5>
                    </div>
                </div>
            </div>
            <div className='about-container-skills'>
                Skills
                <div className='about-container-skills-container'>
                    <div className='about-container-skills-row1'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Next.js</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className='about-container-skills-row1'>
                        <ul>
                            <li>API Integration</li>
                            <li>MUI</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>PPC</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default About