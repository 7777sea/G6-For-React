import React from 'react';
import {
    NodePanel,
    
    DetailPanel,
} from 'gg-editor';
import NodeDetail from './nodeDetail';
// import EdgeDetail from '../EdgeDetail';
// import GroupDetail from '../GroupDetail';
// import styles from './index.less';

class FlowDetailPanel extends React.Component {
    render() {
        return (
            <DetailPanel>
                <NodePanel>
                    <NodeDetail />
                </NodePanel>
                
            </DetailPanel> 
        );
    }
}

export default FlowDetailPanel;
