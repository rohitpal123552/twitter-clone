import React, { useState } from 'react';
import './TweetBox.css'
import { Button, Avatar } from '@material-ui/core';
import db from './firebase';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: 'Eiwin',
            username: 'eiwin',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://img.freepik.com/free-vector/children-birthday-invitation-template_23-2148630523.jpg?size=338&ext=jpg&ga=GA1.2.748024188.1595418877"
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return(
        <div className="tweetBox">
        <form>
        <div className="tweetBox__input">
            <Avatar src="https://img.freepik.com/free-vector/children-birthday-invitation-template_23-2148630523.jpg?size=338&ext=jpg&ga=GA1.2.748024188.1595418877"></Avatar>
            <input 
            type="text" 
            placeholder="What's happening ?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
             />
        </div>
        <input 
            className="tweetBox__imageInput" 
            type="text" 
            placeholder="Optional : Enter Image URL"
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)} />

      <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button> 
        </form>

        </div>
    );
}

export default TweetBox;