import React from 'react';
import GGEditor, { Flow } from 'gg-editor';

class FlowComponents extends React.PureComponent{
    clickHandle=()=>{
        alert('clickHandle');
    }
    nodeClickHandle=()=>{
        alert('nodeClickHandle');
    }
    render(){
        const data = {
            nodes: [{
                type: 'node',
                size: '70*70',
                shape: 'flow-circle',
                color: '#FA8C16',
                label: '起止节点',
                x: 55,
                y: 55,
                id: 'ea1184e8',
                index: 0,
            }, {
                type: 'node',
                size: '70*70',
                shape: 'flow-circle',
                color: '#FA8C16',
                label: '结束节点',
                x: 55,
                y: 255,
                id: '481fbb1a',
                index: 2,
            }],
            edges: [{
                source: 'ea1184e8',
                sourceAnchor: 2,
                target: '481fbb1a',
                targetAnchor: 0,
                id: '7989ac70',
                index: 1,
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
export default FlowComponents;
  