import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState(null);
    const [sent, setSent] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {name, email, message};
        const response = await fetch('/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        else{
            setError(null)
            setName(null)
            setEmail(null)
            setMessage(null)
            setSent(true)
            console.log("message sent", json)
        }
    }
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <div id='contact' className="contact-page">
            <div className="contact-heading">
                <p>Get in touch with me,</p>
                <h1 data-aos="zoom-in">Contact</h1>
            </div>
            <div className="details">
                <form onSubmit={handleSubmit}>
                    <label data-aos="zoom-in">
                        <h1>Name:</h1>
                        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} required placeholder="Enter your name" className="name-field" />
                    </label>
                    <label data-aos="zoom-in">
                        <h1>Email:</h1>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required className="email-field" placeholder="Enter your email"/>
                    </label>
                    <label data-aos="zoom-in">
                        <h1>Message:</h1>
                        <input type="text" onChange={(e)=>{setMessage(e.target.value)}} value={message} required className="message-field" placeholder="Enter your message"/>
                    </label>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
            {sent?(<><h4>Message Sent</h4></>):(error?<><h4>There was some error</h4></>:<></>)}
        </div>
    );
}
 
export default Contact;