import React from 'react'
import "../style/TweetBox.scss"

function TweetBoox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
                <img src='https://source.unsplash.com/1YH0mu5Pcgs' alt='avtar' />
                <input placeholder="what's happening?" type='text'/>
            </div>
                <input className='tweetBox_imginput' placeholder="Optional: enter image url" type='text'/>

            <button className='tweetBox_tweetbtn'>Tweet</button>
        </form>
    </div>
  )
}

export default TweetBoox