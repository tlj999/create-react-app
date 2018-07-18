import React from 'react';

import './index.less'


class Login extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="container">
        <div className="telbox">
          <label>+86</label>
          <input type="text" placeholder-className="placeholder" value="" placeholder="请输入手机号码" />
        </div>
        <div className="codebox">
          <input type="text" placeholder-className="placeholder" value=""  placeholder="请输入验证码" />
          <button className="get-code" disabled="{{disabled}}" >获取验证码</button>
        </div>
        <button className="login" >补全手机号</button>
      </div>
    );
  }
}

export default Login;