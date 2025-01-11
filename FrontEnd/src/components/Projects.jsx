import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Projects = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <div id='projects' className="projects-page" >
            <div className="heading" data-aos="zoom-in">
                <h1>Projects</h1>
            </div>
            <div className="projects-div">
            <div className="projects">
                <div className="card" data-aos="flip-right">
                    <img src={require('./utils/Screenshot 2024-05-28 224957.png')} alt="" />
                    <a href="https://github.com/KushagraSingh1100/Youtube-Clone" rel="noreferrer" target='_blank'><img className='github' src={require('./utils/icons8-github-30.png')} alt="" /></a>
                    <h2 >Youtube Clone</h2>
                    <p>A working clone of most popular video streaming website Youtube made using React.js and with the help of youtube API.</p>
                </div>
                <div className="card" data-aos="flip-right">
                    <img src={require('./utils/Screenshot 2024-05-28 225958.png')} alt="" />
                    <a href="https://github.com/KushagraSingh1100/Weather-App" target='_blank' rel="noreferrer"><img className='github' src={require('./utils/icons8-github-30.png')} alt="" /></a>
                    <h2 >Weather App</h2>
                    <p>A working weather app which keeps its user up-to-date with the current weather of the locations. It was made using JavaScript with the help of weather API.</p>
                </div>
                <div className="card" data-aos="flip-right">
                    <img src={require('./utils/Screenshot 2024-05-28 232250.png')} alt="" />
                    <a href="https://github.com/KushagraSingh1100/Minimalist-News" target='_blank' rel="noreferrer"><img className='github' src={require('./utils/icons8-github-30.png')} alt="" /></a>
                    <h2 >Minimalist News</h2>
                    <p>A news app which keeps it's user up to date with all the latest news from all around the world. It was made using React.js with the help of news API.</p>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Projects;