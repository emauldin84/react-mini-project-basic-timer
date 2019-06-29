import React from 'react'

export default function StartStopButton(props) {
    return (
        <div>
            <button onClick={props.startStop} disabled={props.time===null || props.time==='' ? true : false}>{props.status ? 'Stop' : 'Start'}</button>
            
        </div>
    )
}
