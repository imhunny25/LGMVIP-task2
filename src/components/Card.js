import React from 'react';
import './Navigation/Navbar.css';

const Card = ({ name, email, id, lname}) => {
  //Displays all the information in a card format
    return (
      <div className='tc grow  br2 pa5 ma3 dib bw2 shadow-10 card-layout'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div className="bottom-content">
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;
