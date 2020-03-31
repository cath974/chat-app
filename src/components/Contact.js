import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = ({ name, avatar, online }) => (
  <div className="Contact">
    <img className="avatar" src={avatar} alt={name} />
    <div>
      <h4 className="name">{name}</h4>
      <div className="status">
        <span className={online ? "status-online" : "status-offline"} />
        <p className="status-text">{online ? "online" : "offline"}</p>
      </div>
    </div>
  </div>
);

Contact.proTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool
};

export default Contact;

  
