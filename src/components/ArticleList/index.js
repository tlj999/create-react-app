import React from 'react'
import {getInfolistBysort} from '../../utils/api';
import './index.less'


export default class ArticleList extends React.Component {
  componentDidMount(){
    this.getDymamic()
  }

  async getDymamic() {
    const json = await getInfolistBysort({
      query:{
        pagesize:5
      }
    })
    console.log(json)
  }

  render (){
    return (
      <ul>
        <li className="dynamic-item">
          <img src={require('../../images/news.png')} alt=""/>
          <div className="dy-con">
            <div className="title">可点击付款发达的的</div>
            <div className="con">山顶看风景的伤口更多复古个地方更多复古风风德国附近的水库</div>
            <div className="view">
              <img src={require('../../images/fire.png')} alt=""/>
              <span>21324已看</span>
            </div>
          </div>
        </li>
      </ul>
      
    );
  }
}