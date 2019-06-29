import React from 'react'

export default function StartStopButton(props) {
    return (
        <div>
            <button className='startStop' onClick={props.startStop} disabled={props.time===null || props.time==='' || props.time===0 ? true : false}>{props.status ? 'Stop' : 'Start'}</button>
        </div>
    )
}
