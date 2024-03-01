import React from 'react'
import "../style/widgets.scss"
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed"

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      <input placeholder='Search Twitter' type='text'/>
      </div>
      <div className='widgets_widgetsContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"}/>

                <TwitterTimelineEmbed
          sourceType="profile"
          screenName="renuKundan"
          options={{ height: 400 }}
        />


        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />

      </div>
    </div>
  )
}

export default Widgets