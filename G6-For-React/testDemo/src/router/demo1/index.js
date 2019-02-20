/* eslint-disable */

import React from 'react';
import GGEditor,{ Flow } from 'gg-editor';
import FlowItemPanel from './itemBar';
import EditorMinimap from './miniPic';
import FlowDetailPanel from './flowSetting'
import { Row, Col } from 'antd';

class Demo1 extends React.PureComponent{
    nodeClickHandle=()=>{
        alert(1);
    }
    
    render(){
        return <GGEditor>
            <Row>
                <Col span={4}>
                    <FlowItemPanel />
                </Col>
                <Col span={16} style={{border:'1px soild #ccc'}}>
                    <Flow 
                        style={{height:800}}
                        onNodeClick={this.nodeClickHandle}
                    />    
                </Col>
                <Col span={4}>
                    <EditorMinimap />
                    <FlowDetailPanel/>
                </Col>
            </Row>
            
            
        </GGEditor>;
    }
}

export default Demo1;
