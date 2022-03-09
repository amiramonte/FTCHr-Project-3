import React, { useState, useEffect } from 'react'
import './conversation.css'
import image from '../../images/naruto.jpg';
import axios from 'axios';

export default function Conversations({ conversation, currentUser }) {
  const members = [conversation.senderId, conversation.recieverId];
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = members.find(person => person !== currentUser )
    // const friendId = members.find(person => person !== currentUser.id )
    console.log(friendId);
    // const friendId = "amiramonte"
    const getUser = async() => {
      try {
        console.log("inside try block")
        const response = await axios('http://localhost:3001/api/user/getuser/' + friendId) 
        // const response = await axios.get('http://localhost:3001/api/user/getuser/amiramonte') 
        console.log(response.data, "response")
        setUser(response.data);
      } catch(err) {
        console.log(err);
      }
    }
    getUser();
  }, [currentUser, conversation])

  console.log(user, "hello there")
  return (
    <div className='conversation'>
      <img 
        className='conversationImg' 
        // src={user?.user_photo ? user.user_photo : image} 
        src={image}
        alt="something" />
      {/* <span className='conversationName'>{`${conversation.senderId}, ${conversation.recieverId} `}</span> */}
      <span className='conversationName'>{user?.user_name}</span>
    </div>
  )
}

