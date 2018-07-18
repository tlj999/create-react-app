import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import { Tabs} from 'antd-mobile';
import ArticleList from '../../components/ArticleList';
import './index.less'

class Article extends React.Component {
  renderContent = tab =>
    (<div style={{ padding:'0 15px', backgroundColor: '#fff' }}>
      <ArticleList/>
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


export default Article;