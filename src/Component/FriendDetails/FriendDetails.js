import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [theFriend, setTheFriend] = useState({});
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    useEffect(()=>{     
        fetch(url)
        .then(res => res.json())
        .then(data => setTheFriend(data))
    },[])
    const {name, email, id, phone} = theFriend;
    return (
        <div>
            <h2>Name : {name}</h2>
            <h3>Email : {email}</h3>
            <h4>Id : {id}</h4>
            <h4>Phone : {phone}</h4>
        </div>
        
    );
};

export default FriendDetails;