import React from 'react'

export default function TimerInput(props) {
    console.log('time:',props.time)
    let timerInput = null
    if(!props.timeRunning){
        console.log('timer input')
    timerInput = 
        <div className='inputContainer'>
            <input 
                type='number' 
                name='time'
                // defaultValue={props.time} 
                onChange={props.change}
                placeholder={props.time==='' ? 'enter seconds' : props.time}
                maxLength="6"/>
        </div>
    }

    return (
        <>
        {timerInput}
        </>
    )
}
