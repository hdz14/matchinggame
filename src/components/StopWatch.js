import React from 'react';
import { Timer } from 'react-countdown-clock-timer';

const StopWatch = (props) => {

      return (
        <div className='timer-container'>
        <div className="new-game">
        <Timer
        durationInSeconds={20}
        formatted={true}
        isPaused={false}
        showPauseButton={false}
        showResetButton={true}
        
        onStart = {()=> {
          console.log('Triggered when the timer starts')
        }}
        onPause = {(remainingDuration)=> {
          console.log('Triggered when the timer is paused', remainingDuration)
        }}
        onFinish = {()=> {
          console.log('Triggered when the timer finishes')
        }}
        onReset = {(remainingDuration)=> {
          console.log('Triggered when the timer is reset', remainingDuration)
          props.onReplay()
        }}
        onResume = {(remainingDuration)=> {
          console.log('Triggered when the timer is resumed', remainingDuration)
        }}
        />
        Game
        </div>
      </div>
      )
}

export default StopWatch