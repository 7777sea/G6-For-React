/* eslint-disable */

import React from 'react';
import GGEditor, { Flow} from 'gg-editor';
import { withPropsAPI } from 'gg-editor';

class FlowComponents extends React.PureComponent{
    clickHandle=()=>{
        // alert('clickHandle');
    }
    nodeClickHandle=()=>{
        alert('nodeClickHandle');
    }
    render(){
        const data = {
            nodes: [{
                color: "#FA8C16",
                id: "2d129dac",
                index: 0,
                label: "起止节点",
                shape: "flow-circle",
                size: "72*72",
                type: "node",
                x: 114,
                y: 62,
            }, {
                color: "#1890FF",
                id: "04f24a2c",
                index: 1,
                label: "常规节点",
                shape: "flow-rect",
                size: "80*48",
                type: "node",
                x: 121,
                y: 217,
            },{
                color: "#13C2C2",
                id: "fd465dc6",
                index: 2,
                label: "分叉节点",
                shape: "flow-rhombus",
                size: "80*72",
                type: "node",
                x: 364,
                y: 70
            },{
                color: "#722ED1",
                id: "cb7fbf95",
                index: 3,
                label: "模型节点",
                shape: "flow-capsule",
                size: "80*48",
                type: "node",
                x: 364,
                y: 211,
            }],
            edges: [{
                id: "81ceb582",
                index: 4,
                source: "2d129dac",
                sourceAnchor: 2,
                target: "04f24a2c",
                targetAnchor: 0,
            },{
                id: "43d918b4",
                index: 5,
                source: "2d129dac",
                sourceAnchor: 1,
                target: "fd465dc6",
                targetAnchor: 3
            },{
                id: "e633fd27",
                index: 6,
                source: "fd465dc6",
                sourceAnchor: 2,
                target: "04f24a2c",
                targetAnchor: 1,
            },{
                id: "4bec2516",
                index: 7,
                source: "2d129dac",
                sourceAnchor: 1,
                target: "cb7fbf95",
                targetAnchor: 3,
            }],
        };
        return <GGEditor >
            <Flow 
                style={{height:600,border:'1px soild #ccc'}}
                data={data}
                onClick={this.clickHandle}       // 点击画布
                onNodeClick={this.nodeClickHandle}   // 点击节点
                onEdgeClick={() => {}}   // 点击边线
                onGroupClick={() => {}}  // 点击群组
                onGuideClick={() => {}}  // 点击导引
                onAnchorClick={() => {}} // 点击锚点
            />
        </GGEditor>;
    }
}
export default withPropsAPI(FlowComponents);
  