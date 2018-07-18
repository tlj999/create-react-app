import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import ArticleList from '../../components/ArticleList';
import './index.css';

export default class Home extends React.Component {
  state = {
    banners: [4,2,1,3],
    navList: [
      {
        url: 'newbie',
        txt: '新手'
      },
      {
        url: 'singleOff',
        txt: '脱单'
      },
      {
        url: 'save',
        txt: '挽回'
      },
      {
        url: 'snipers',
        txt: '阻击'
      }
    ],
    imgHeight: 176,
  }
  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={{background:'#f5f5f5'}}>
        <Carousel
          autoplay={true}
          infinite 
        >
          {this.state.banners.map(val => (
            <img 
              src={require(`../../images/banner${val}.jpg`)}
              key={val}
              alt="banner"
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
             ))}
        </Carousel>
        <ul className="navOperat">
          {this.state.navList.map((val,index) => (
            <li  key={index} className="nav-item">
              <img src={require(`../../images/${val.url}.png`)} alt=""/>
              <span>{val.txt}</span>
            </li>
          ))}
        </ul>
        {/* <Link to='/login'> <LiveList/></Link> */}
       
        <div className="dynamic-content">
          <div className="navbar">
            <span>最新动态</span>
            <span className="view-all">查看全部</span>
          </div>
          <ArticleList/>
        </div>
      </div>
    );
  }
}

