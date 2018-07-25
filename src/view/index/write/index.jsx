import React, { Component } from 'react';
import { Input, Upload, Icon, Button } from 'antd';

import RichText from '../../../components/richText'
import './index.less'

const Dragger = Upload.Dragger;
// const { TextArea } = Input;
class Write extends Component {
  render() {
    return (
      <div className="write">
        <div className="writeHd">
          写文章
        </div>
        <div className="writeBd">
          <div className="writeImg">
            <Dragger>
                <Icon type="inbox" />
            </Dragger>
          </div>
          <div className="writeTit">
            <Input placeholder="请输入标题（最多 30 个字）" /> 
          </div>
          <div className="writeCont">
            {/* <TextArea rows={4} /> */}
            <RichText />
          </div>
          <Button type="primary" className="save">保存</Button>
        </div>
      </div>
    );
  }
}

export default Write
