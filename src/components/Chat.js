import React from 'react'
import './Chat.css'
import gptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user-icon.png';
import gptImgLogo from  '../assets/chatgptLogo.svg';
const Chat = () => {
  return (
    <div className='Chat'>
        <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="" className="logo" /><span className="brand">CareerIT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
          <button className="query"><img src={msgIcon} alt="Query" />What excites you most about technology?(e.g.coding, hardware, AI, cybersecurity)</button>
          <button className="query"><img src={msgIcon} alt="Query" />Do you enjoy problem-solving or creating new solutions?</button>
          </div>
        </div>
        <div className="lowerSide">
          
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />IT Recommendations</div>
          <div className="listItems"><img src={rocket} alt="Rocket" className="listItemsImg" />Explore your Track</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fuga cumque minus dolorem quibusdam labore non unde atque sapiente possimus.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis velit sit repellat. Harum, sunt molestias voluptas reiciendis ipsa neque ad iure ea, fugiat animi, quae facilis inventore soluta quasi nulla? Cupiditate optio dicta beatae deleniti rem suscipit ducimus tempora blanditiis aut eaque sed, aliquid corporis dolorum eveniet ullam inventore dolore tenetur quis, nesciunt sequi eum dolor numquam nam accusantium. Nam neque nulla natus impedit iure aperiam corrupti. Dignissimos vel ea porro rerum maxime ducimus culpa dolorum vitae libero! Explicabo voluptate tenetur quisquam, deserunt incidunt voluptates rerum? Optio vel eveniet placeat laboriosam voluptatum molestias natus quisquam tempore doloremque, ipsum, perspiciatis quam.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>This site can make mistakes,Check important info. </p>
        </div>
      </div>
    </div>
  )
}

export default Chat