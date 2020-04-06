import React, { Component } from 'react';
import './Contact.css';
import { PropTypes } from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    const {name, avatar} = this.props;
    return (
      <div className="Contact">
    <img className="avatar" src={avatar} alt={name} />
    <div>
      <h4 className="name">{name}</h4>
      <div className="status">
        <span 
         onClick={event => {
          const newOnline = !this.state.online;
          this.setState({ online: newOnline });
        }}
        className={this.state.online ? 'status-online' : 'status-offline'}
        />

        <p className="status-text">{this.state.online ? "online" : "offline"}</p> 
      </div>
    </div>
  </div>
    );
  }
}


Contact.proTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool
};

export default Contact;

  
