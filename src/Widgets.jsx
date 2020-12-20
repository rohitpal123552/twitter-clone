import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed, 
     } from 'react-twitter-embed';
    import SearchIcon from '@material-ui/icons/Search';

const Widgets = () =>{
    return(
        <div className="widget">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Tweet"></input>
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'933354946111705097'}/>

                    {/* Adding Tweet: */}

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 400}}
                />

                {/* Adding Share Button: */}

                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'eiwin' }}
                />

                {/* Adding Mention Button: */}

                <TwitterMentionButton
                    screenName={'eiwin'}
                />

                {/* Adding Hashtag button: */}

                <TwitterHashtagButton
                    tag={'cybersecurity'}
                />

                {/* Adding follow button: */}

                <TwitterFollowButton
                    screenName={'saurabhnemade'}
                />

                

            </div>
            
        </div>
    );
}

export default Widgets;