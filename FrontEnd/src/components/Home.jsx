import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <div className="home-page">
            <div className="home">
                <div className="name">
                    <h1>Hey there, I'm</h1>
                    <h1>KUSHAGRA</h1>
                    <div className="home-me" data-aos="fade-right">
                        <p>A Full-Stack Web Developer</p><p>Eager to learn and work on fun and exciting projects.</p>
                    </div>
                </div>
                <img src={require('./utils/IMG_20231225_231902.jpg')} alt="" />
            </div>
        </div>
    );
}
 
export default Home;