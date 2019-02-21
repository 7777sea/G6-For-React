/* eslint-disable */

import React from 'react';
import GGEditor,{ Flow} from 'gg-editor';
import FlowItemPanel from './itemBar';
import EditorMinimap from './miniPic';
import FlowDetailPanel from './flowSetting'
import { Row, Col } from 'antd';
import { withPropsAPI } from 'gg-editor';

class Demo extends React.PureComponent{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let { propsAPI } = this.props;
        console.log(propsAPI);
    }
    nodeClickHandle=(e)=>{

    }
    clickHandle=(e)=>{
        
    }
    render(){
        return <GGEditor>
            <Row>
                <Col span={4}>
                    <FlowItemPanel />
                </Col>
                <Col span={16}>
                    <Flow 
                        style={{height:800}}
                        onClick={this.clickHandle}
                        onNodeClick={this.nodeClickHandle}
                    />    
                </Col>
                <Col span={4}>
                    <FlowDetailPanel/>
                    {/* <EditorMinimap /> */}
                </Col>
            </Row>
        </GGEditor>;
    }
}

export default withPropsAPI(Demo);
