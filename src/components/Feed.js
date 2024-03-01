import React from 'react'
import "../style/Feed.scss"
import TweetBoox from './TweetBoox'
import Post from './Post.js';

function Feed() { 
  
  return (
    <>
    <div className='feed'>
    <div className='feed_header'>
      <h2>Home</h2>
    </div>
<div>
<TweetBoox/>
<Post displayName="Anjali"
username="anjl5"
verified={true}
text="India unveils four Air Force pilots chosen for the historic Gaganyaan mission, set to send astronauts to orbit for three days. Isro conducts tests, including a successful crew escape test, and plans a robot test flight in 2024. Prime Minister Modi hails the astronauts as 'India's pride'"
avatar="https://source.unsplash.com/KMNEkM-VdjE"
image="https://source.unsplash.com/fsz3b0UnwZ8"/>
<Post displayName="Rahul"
username="rahul0_"
verified={true}
text="🌟 Experience the future today with the incredible power of Artificial Intelligence (AI)! From simplifying everyday tasks to revolutionizing industries, AI is shaping a smarter, more efficient world. 💡 Let's embrace the AI revolution! 🚀#ArtificialIntelligence #AI #Innovation #Tech"
avatar="https://source.unsplash.com/v2aKnjMbP_k"
image="https://source.unsplash.com/nGoCBxiaRO0"/>

<Post displayName="deepanshu"
username="deepanshu130_"
verified={true}
text="Unleash the brilliance of diamonds with Bright Rock! 💎 Elevating elegance and sophistication, our exquisite collection shines with timeless beauty. Explore the allure of luxury and prestige with Bright Rock. 💍 #BrightRock #Diamonds #Luxury #Elegance"
avatar="https://source.unsplash.com/3JmfENcL24M"
image="https://source.unsplash.com/TnREirV-BUA"

/>
<Post displayName="ahsa"
username="ahsa0_"
verified={true}
text="Discover the transformative synergy between humans and AI tools! 🚀 Unlock new realms of productivity and innovation as you harness the power of AI to augment your capabilities. With seamless integration and intelligent insights, our AI tools empower you to achieve more, faster. Embrace the future of collaboration with AI as your trusted ally. 🤝 #AI #Technology #Innovation #Collaboration"
avatar="https://source.unsplash.com/7mBictB_urk"
image="https://source.unsplash.com/gVQLAbGVB6Q"/>
<Post displayName="Renu"
username="kundan"
verified={true}
text="Embrace the dynamic interplay of male-female relationships! 💑 Celebrate the blend of strengths, perspectives, and shared experiences that enrich our lives. Together, we navigate the journey of respect, support, and growth, fostering enduring bonds. Let's honor the magic of partnership and cherish our unique connection. #Relationships #Love #Unity"
avatar="https://source.unsplash.com/MeND9z_8fTQ"
image="https://source.unsplash.com/Lim3NQQ_RZ4"/>
<Post displayName="kunal"
username="kun"
verified={true}
text="🤖 From cutting-edge innovations to everyday helpers, robots are revolutionizing industries and shaping our future. Dive into the realm of artificial intelligence, where machines learn, adapt, and evolve. Explore the boundless possibilities of robotics in transforming how we work, live, and interact. Join the robotic revolution and unlock the potential of tomorrow's technology today! #Robots #AI #Innovation"
avatar="https://source.unsplash.com/WMD64tMfc4k"
image="https://source.unsplash.com/ts9-hrug7LE"/>

<Post displayName="Taniya"
username="Tani"
verified={true}
text="Embark on an interstellar journey to the vast expanse of space! 🌌 Explore the mysteries of the cosmos, from distant galaxies to shimmering nebulae. Experience the awe-inspiring beauty of celestial bodies and marvel at the wonders of the universe. Journey beyond the confines of Earth and glimpse the infinite possibilities that await us among the stars. From cosmic phenomena to the search for extraterrestrial life, the cosmos beckons with endless fascination and discovery. Join us as we voyage into the great unknown and unlock the secrets of the cosmos! #SpaceExploration #Universe #CosmicAdventure"
avatar="https://source.unsplash.com/16aAmc4f7fA"
image="https://source.unsplash.com/7tY-UnBr4Mo"/>
<Post displayName="himanshu"
username="himashu0_"
verified={true}
text="Prime Minister Modi unveils the four chosen Indian Air Force pilots for ISRO's inaugural crewed space mission, Gaganyaan. Selected from experienced test pilots, including Group Captain Prashanth Balakrishnan Nair, they prepare to make history."
avatar="https://source.unsplash.com/G-jo31ESuRE"
image="https://source.unsplash.com/9-X1-nzgqdI"/>

</div>
    </div>
    </>
  )
}

export default Feed