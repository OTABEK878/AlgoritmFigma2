import React from 'react'
import "./client.css"
const Client = () => {
  return (
    <div>
      <div className="client">
        <div className="client-text">
            <h1>Client Acclamation</h1>
        </div>
        <div className="client-content">
            <div className="client-box">
                <div className="client-img">
                <img src="./img/Avatar --lummi=avatars (8).png" alt="" />
                <p>Jamie Smith, Tech Chief</p>
                </div>
                <div className="client-txt">
                    <p>“A revolutionary design mindset that flawlessly matches our brand's mission.”</p>
                </div>
            </div>
            <div className="client-box">
                <div className="client-img">
                <img src="./img/Avatar --lummi=avatars (9).png" alt="" />
                <p>Alexa Jones, Venture Originator</p>
                </div>
                <div className="client-txt">
                    <p>“Remarkable focus on specifics and a delight to work together on our venture.”</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Client;