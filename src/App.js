import React, {Component} from 'react';
import './App.css';

import TimerInput from './components/TimerInput'
import Timer from './components/Timer'
import StartStopButton from './components/StartStopButton'
import ResetButton from './components/ResetButton'

class App extends Component{
  state = {
    time: 0,
    displayInput: true,
    timeRunning: null,
  }

  handleInputChange = (e) => {
    this.setState({
      time: e.target.value
    })
  }

  // countDownHandler = setInterval(() => {
  //   this.setState((prevState) => { 
  //     return {time: prevState.time - 1}
  //   })
  // }, 1000)

  handleStartStopTimer = () => {
    if(this.state.time > 0){

      if (!this.state.timeRunning) {
        this.setState((prevState) => {return {timeRunning: !prevState.timeRunning}})
        this.timer = setInterval(() => {
          this.setState((prevState) => { 
            return {time: prevState.time - 1}
          })
        }, 1000)
      } 
      if (this.state.timeRunning) {
        this.setState((prevState) => {return {timeRunning: !prevState.timeRunning}})
        clearInterval(this.timer)
      }

    }
  }
  
  handleClearTimer = () => {
    clearInterval(this.timer)
    this.setState({
      time: 0,
      timeRunning: false,
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Timer</h1>
        <header className="App-header">
          <div className='container'>
  
            <div className='timeDisplay'>
              <p>Timer Display</p>
              <Timer time={this.state.time}/>

              <TimerInput
                time={this.state.time}
                show={this.state.displayInput}
                change={this.handleInputChange}/>
            </div>
            
            <div className='controls'>
              
              <StartStopButton 
              startStop={this.handleStartStopTimer}
              status={this.state.timeRunning}/>
              
              <ResetButton clearTimer={this.handleClearTimer}/>

            </div>
  
          </div>
        </header>
      </div>
    );
  }

}

export default App;
