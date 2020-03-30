import React from 'react';
import './Contact.css';


const name = 'Levi Gilbert';
const avatar ='https://randomuser.me/api/portraits/men/77.jpg';
const status = true;

function Contact() {
    return (
    <div className="Contact">
        <img alt="" src={avatar} />
        <div>
            <h4> {name} </h4>
            <div className="status">
            <option className="status-online"></option>
            <p className="status">{status? "online": "offline"}</p>
            </div>
        </div>
    </div>
    );
}
  
  
  export default Contact;