import React from 'react'

export default function Timer(props) {
    return (
        <div className={props.time<10 ? 'finalCountDown' : null}>
            <p>{props.time === 0 ? "time's up!" : props.time}</p>
            
        </div>
    )
}
