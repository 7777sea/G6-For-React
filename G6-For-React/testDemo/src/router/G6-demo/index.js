import React from 'react';
import G6 from '@antv/g6';

class ChartsDemo extends React.PureComponent{
    
    constructor(props) {
        super(props);
        this.state={

        };
    }
    componentDidMount() {
        // dom 已经渲染完成时加载图片, G6渲染依赖根节点
        this.renderG6();
    }
    renderG6 = () => {
        // 渲染图所需数据
        const data = {
            nodes: [{
                id: 'node1',
                shape: 'customNode',
                x: 100,
                y: 200
            },{
                id: 'node2',
                x: 300,
                y: 200
            }],
            edges: [{
                id: 'edge1',
                target: 'node2',
                source: 'node1'
            }]
        }; 
        // 初始化G6图
        const graph = new G6.Graph({
            container: 'mountNode',
            width: 600,
            height: 300
        });
        // Graph 是最基础的图类, G6 技术栈中所有关系图都是由该类负责绘制
        // 读数据
        graph.read(data);
    }
    render() {
        return <div id="mountNode"></div>;
    }

}
export default ChartsDemo;