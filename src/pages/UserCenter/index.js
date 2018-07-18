import React from 'react';
import { List,WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.less';

const Item = List.Item;

class UserCenter extends React.Component {
  state = {
    disabled: false,
  }
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(123)
  }
  render() {
    return (<div>
      <div className="user-info">
        <div className="user">
          <img src={require('../../images/save.png')} alt=""/>
          <div className="info">
            <div className="userid">ID:24524</div>
            <div className="nickname">昵称：452445（新手）</div>
            <div className="learntime">学习时长：333分钟</div>
          </div>
        </div>
        <div className="level" >
          <div className="bg-level">15</div>
          <div className="desc">等级15级</div>
        </div>
      </div>
      <List>
        <Item
          thumb={require('../../images/zl.png')}
          arrow="horizontal"
          onClick={() => {
            this.props.history.push('/profile')
            console.log(this.props)
          }}
        >我的资料</Item>
        <Item
          thumb={require('../../images/xx.png')}
          extra="脱单约会"
          onClick={() => {this.props.history.push('/wannado')}}
          arrow="horizontal"
        >
          我想
        </Item>
      </List>
      <WhiteSpace/>
      <List>
        <Item
          thumb={require('../../images/jf.png')}
          onClick={() => {}}
          arrow="horizontal"
        >
          我的订单
        </Item> 
        <Item
          thumb={require('../../images/help.png')}
          onClick={() => {}}
          arrow="horizontal"
        >
          帮助中心
        </Item>
      </List>
      <WhiteSpace/>
        <button className="loginOut" 
        onClick={() => {this.props.history.push('/login')}}>退出登录</button>
    </div>);
  }
}

export default UserCenter;