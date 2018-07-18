import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import { Tabs } from 'antd-mobile';

import VideoList from '../../components/VideoList'

class Video extends React.Component{
  renderContent = tab =>
    (<div style={{ padding:'0 15px', backgroundColor: '#fff' }}>
      <VideoList/>
    </div>);

  render() {
    const tabs = [
      { title: '推荐' },
      { title: '新人百宝箱'},
      { title: '恋爱有招' },
      { title: '实战案例' },
    ];

    return (
      <div>
        <Tabs tabs={tabs}>
          {this.renderContent}
        </Tabs>
      </div>
    );
  }
}
export default Video;