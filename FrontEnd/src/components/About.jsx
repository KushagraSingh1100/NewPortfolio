import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <div id='about' className="about">
            <div className="about-page">
            <div className="left" data-aos="fade-left">
               <div className="left-text">
                <div className="about-heading">
                    <h1>About Me</h1>
                </div>
                <div className="about-para">
                    <p>A MERN stack developer with expertise in JavaScript, Node.js, and other frameworks.</p> <p>Always eager to learn new things and find solutions to practical problems. I'm willing to work!</p>
                </div>
               </div>
            </div>
            <div className="right" data-aos="fade-right">
                <img src={require('./utils/react.png')} alt="" />
                <img src={require('./utils/javascript.png')} alt="" />
                <img src={require('./utils/html.png')} alt="" />
                <img src={require('./utils/css.png')} alt="" />
            </div>
            </div>
            <div className="skills">
                <div className="skills-text" data-aos="fade-right">
                <h1>Skills</h1>
                <p>PYTHON | C++ | C | NODE.js | MONGODB | BOOTSTRAP | TAILWIND</p>
                </div>
                <div className="skills-icons" data-aos="zoom-in">
                    <img src={require('./utils/python-programming-language-icon.png')} alt="" />
                    <img src={require('./utils/c-plus-plus-programming-language-icon.png')} alt="" />
                    <img src={require('./utils/c-program-icon.png')} alt="" />
                    <img src={require('./utils/node-js-icon.png')} alt="" />
                    <img src={require('./utils/mongodb-icon.png')} alt="" />
                    <img src={require('./utils/bootstrap-5-logo-icon.png')} alt="" />
                    <img src={require('./utils/tailwind-css-icon.png')} alt="" />
                </div>
            </div>
        </div>
    );
}
export default About;