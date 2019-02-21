import React from 'react';
import { Card } from 'antd';
import GGEditor,{ Minimap } from 'gg-editor';

class EditorMinimap extends React.Component {
    render() {
        return (
            <Card type="inner" title="缩略图" bordered={true}>
                <GGEditor>
                    <Minimap height={200} />
                </GGEditor>
                
            </Card>
        );
    }
}

export default EditorMinimap;