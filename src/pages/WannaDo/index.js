import React from 'react';
import {Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.less'
class WannaDo extends React.Component{
  constructor(props){
    super(props)

    this.selectedWish = this.selectedWish.bind(this)
  }
  state = {
    wishlist:[
      {name:'脱单攻咯',ischeck:false},
      {name:'脱单秘籍',ischeck:false},
      {name:'挽回真爱',ischeck:false},
      {name:'狙击女神',ischeck:false},
      {name:'学习聊天',ischeck:false}],
    checkWish:[]
  }

  selectedWish(index) {
    const {wishlist,checkWish} = this.state
    const cIndex= checkWish.indexOf(wishlist[index].name)
    wishlist[index].ischeck=!wishlist[index].ischeck
    if(cIndex!==-1){
      checkWish.splice(cIndex,1)
    }else{
      checkWish.push(wishlist[index].name)
    }
    console.log(checkWish)
    this.setState({wishlist,checkWish})
  }
  
  render() {
    return (
      <div className="contain">
        <ul className="wishList">
          {this.state.wishlist.map((val,index) =>(
            <li key={index} 
            onClick={()=>{this.selectedWish(index)}} 
            className={val.ischeck?'checkIn':''}>{val.name}</li>
          ))}
        </ul>
        <Button className="saveBtn">保存</Button>
      </div>
    )
  }
}
export default WannaDo;