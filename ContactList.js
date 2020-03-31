import React from "react";
import PropTypes from "prop-types";
import "./ContactList.css";

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

  const ContactList = () => (
    <div>
      {users.map(item => (
       <div className="Contact">
       <img className="avatar" src={item.avatar} alt={item.name} />
       <div>
         <h4 className="name">{item.name}</h4>
         <div className="status">
           <span className={item.online ? "status-online" : "status-offline"} />
           <p className="status-text">{item.online ? "online" : "offline"}</p>
         </div>
       </div>
     </div>
      ))}
    </div>
  );

  const QuoteList = () => (
    <div>
      {quotes.map(item => (
        <img key={item.quote} src={item.image} alt={item.character} />
      ))}
    </div>
  );

  ContactList.proTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    online: PropTypes.bool
  };


  export default ContactList;
