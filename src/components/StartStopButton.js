import React from 'react'

export default function StartStopButton(props) {
    return (
        <div>
            <button onClick={props.startStop}>{props.status ? 'Stop' : 'Start'}</button>
            
        </div>
    )
}
