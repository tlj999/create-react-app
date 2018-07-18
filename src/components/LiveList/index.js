import React from 'react';
import './index.less'

export default class LiveList extends React.Component{
  constructor(props) {
    super(props);
    this.handChange = this.handChange.bind(this)
  }
  componentWillMount() {

  }

  componentDidMount() {
  }
  handChange() {
    console.log(this.props)
  }

  render () {
    return (
      <div  className="live" onClick={this.handChange}>
        <div className="live-left">
          <img src={require('../../images/save.png')}alt=""/>
          <div className="live-content">
            <div className="teacher-name">开发贷款</div>
            <div className="teach-con">防守端开发就开始打飞韩国发行方机</div>
          </div>
        </div>
        <div className="join-num">
            {/* <div>
              <img src="../images/zhibo.gif"/>
              <span>直播中</span>
            </div>
            <div className="num">15654参与</div>*/}
            <div>
              <span>直播时间</span>
            </div>
            <div className="num">20:09-21:30</div>
        </div>
      </div>
    );
  }
}