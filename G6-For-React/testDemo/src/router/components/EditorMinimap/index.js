/* eslint-disable */

import React from 'react';
import { Card } from 'antd';
import GGEditor,{ Minimap } from 'gg-editor';

class EditorMinimap extends React.Component {
  render() {
    return (<GGEditor>
      <Card type="inner" title="缩略图" bordered={false}>
        <Minimap height={200} />
      </Card>
    </GGEditor>
      
    );
  }
}

export default EditorMinimap;
