import React from 'react';
import './Contact.css';


const name = 'Levi Gilbert';
const avatar ='https://randomuser.me/api/portraits/men/77.jpg';
const status = true;

function Contact() {
    return (
    <div className="Contact">
        <img className="avatar" alt="" src={avatar} />
        <div>
            <h4 className="name"> {name} </h4>
            <div className="status">
                <button className="status-online"></button>
                <p className="status-text">{status? "online": "offline"}</p>
            </div>
        </div>   
            
    </div>
    );
}
  
  
  export default Contact;