import React from 'react';
import { Picker,Button, List,TextareaItem , Checkbox, Flex} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {focustime,revenue,lovestatus,lovetotal} from '../../data/data'
import './index.css'


const AgreeItem = Checkbox.AgreeItem;
// 如果不是使用 List.Item 作为 children

class Profile extends React.Component {
  state = {
    fTime: [],
    rVal:[],
    sVal:[],
    tVal:[],
  };
 
  render() {

    return (<div>
      <List renderHeader={() => '您的工作'}>
        <TextareaItem
          placeholder="请输入..."
          count={10}
        />
      </List>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker
          data={focustime}
          title="选择时间"
          cascade={false}
          extra="请选择"
          value={this.state.fTime}
          onChange={v => this.setState({ fTime: v })}
          onOk={v => this.setState({ fTime: v })}
        >
          <List.Item arrow="horizontal">关注我们多久</List.Item>
        </Picker>
        <Picker
          data={revenue}
          title="选择季节"
          cascade={false}
          extra="请选择"
          value={this.state.rVal}
          onChange={v => this.setState({ rVal: v })}
          onOk={v => this.setState({ rVal: v })}
        >
          <List.Item arrow="horizontal">月收入</List.Item>
        </Picker>
        <Picker
          data={lovestatus}
          title="选择季节"
          cascade={false}
          extra="请选择"
          value={this.state.sVal}
          onChange={v => this.setState({ sVal: v })}
          onOk={v => this.setState({ sVal: v })}
        >
          <List.Item arrow="horizontal">情感状态</List.Item>
        </Picker>
        <Picker
          data={lovetotal}
          title="选择季节"
          cascade={false}
          extra="请选择"
          value={this.state.tVal}
          onChange={v => this.setState({ tVal: v })}
          onOk={v => this.setState({ tVal: v })}
        >
          <List.Item arrow="horizontal">谈过几次恋爱</List.Item>
        </Picker>
      </List>
      
      <List renderHeader={() => '介绍你的情况'}>
        <TextareaItem
          rows={5}
          count={100}
        />
      </List>
      <Flex>
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
            是否需要导师联系你，解答你的问题
          </AgreeItem>
        </Flex.Item>
      </Flex>
      <Button className="saveBtn">保存</Button>
    </div>);
  }
}

export default Profile;