import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';

class Tab extends React.Component {
  state = {
    navIn:0,
    navList: [
      {
        url: 'save',
        txt: '首页',
        path:'/dashboard/'
      },
      {
        url: 'singleOff',
        txt: '视频',
        path:'/dashboard/video'
      },
      {
        url: 'save',
        txt: '文章',
        path:'/dashboard/article'
      },
      {
        url: 'snipers',
        txt: '我的',
        path:'/dashboard/userCenter'
      }
    ],
  }
  
  render() {

    return (
      <ul className="tabBar">
          {this.state.navList.map((val,index) => (
            <Link key={index} to={val.path}>
              <li  className="tab-item" onClick={()=>{
                this.setState({navIn:index})
              }}>
                <img src={require(`../../images/${val.url}.png`)} alt=""/>
                <span className={this.state.navIn==index?'navIn':'nomr'}>{val.txt}</span>
              </li>
            </Link>
          ))}
        </ul>
    );
  }
}


export default Tab;