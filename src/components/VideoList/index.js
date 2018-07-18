import React from 'react';

import './index.less'

class VideoList extends React.Component{
  render(){
    return(
      <ul className="list-flex">
        <li className="listBox">
          <div className="boxPic">
            <img src={require('../../images/news.png')} alt=""/>
            {/* <img src="{{item.icon}}" className="icon show"/> */}
            <div className="time show">
              10：22
            </div>
          </div>
          <div className="boxTitle1">
            <span>付电费水费</span>
          </div>
          <div className="boxTitle2">
            <span>佛挡杀佛佛挡杀佛</span>
          </div>
        </li>
        <li className="listBox">
          <div className="boxPic">
            <img src={require('../../images/news.png')} alt=""/>
            {/* <img src="{{item.icon}}" className="icon show"/> */}
            <div className="time show">
              10：22
            </div>
          </div>
          <div className="boxTitle1">
            <span>付电费水费</span>
          </div>
          <div className="boxTitle2">
            <span>佛挡杀佛佛挡杀佛</span>
          </div>
        </li>
      </ul>
    )
  }
}
export default VideoList;