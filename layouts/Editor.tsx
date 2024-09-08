import SplitPane from 'react-split-pane'
import React from 'react'

const Editor = ({children}) => {
    return (
        <SplitPane
            split="vertical"
            minSize={50}
            maxSize={300}
            defaultSize={100}
            style={{ background: '#f0f0f0', borderLeft: '1px solid #ccc' }}
        >
            <div style={{ background: 'red', height: '100%'}}></div>
            <div style={{ background: 'blue', height: '100%' }}>{children}</div>
            <div style={{ background: 'green', height: '100%' }}></div>
        </SplitPane>
    ) 
}

export default Editor