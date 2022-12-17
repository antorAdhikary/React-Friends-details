import React from 'react';
import {
    Link
  } from "react-router-dom";
const Friend = (props) => {
    const {name, email, id} = props.friend;

    const friendStyle ={
        border: '1px solid gray',
        margin: '2% 30% 2% 30%',
        padding: '20px',
        borderRadius: '5px'
    }
    const handleClick = () => {

    }
    return (
        <div style={friendStyle} >
            <h2>Name : {name}</h2>
            <h3>Email : {email}</h3>
            <Link to={'/friend/'+ id} >For More</Link><br />
            <button onClick={()=> handleClick()}>Details Info</button>
        </div>
    );
};

export default Friend;