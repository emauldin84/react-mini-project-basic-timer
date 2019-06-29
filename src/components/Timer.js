import React from 'react'

export default function Timer(props) {
    let className = null
    if(props.time <10 && props.time>0){
        className= 'finalCountDown'
    } else if (props.time === 0){
        className = 'timeUp'
    }
    return (
        <div className={className}>
            <p>{props.time === 0 ? "time's up!" : props.time}</p>
            
        </div>
    )
}
