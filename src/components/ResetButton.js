import React from 'react'

export default function ResetButton(props) {
    return (
        <div>
            <button className='reset' onClick={props.clearTimer}>Clear</button>
            
        </div>
    )
}
