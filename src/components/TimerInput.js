import React from 'react'

export default function TimerInput(props) {
    return (
        <div className='inputContainer'>
            <input 
                type='number' 
                name='time'
                // defaultValue={props.time} 
                onChange={props.change}
                placeholder='enter seconds'
                maxLength="6"/>
        </div>
    )
}
