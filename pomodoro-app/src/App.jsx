import { useContext, useState } from 'react'
import './App.css'
import SetPomodoro from './components/SetPomodoro'
import CountDownAnimation from './components/CountDownAnimation'
import { SettingContext } from './context/SettingsContext'
import Button from './components/Button'

function App() {
  const {pomodoro, executing, setCurrentTimer, SettingsBtn, children, startAnimate, startTimer, pauseTimer} = useContext(SettingContext)

  return (
    <>
      <div className='container'>
        <h1>Pomodoro</h1>
        <small>Be productive</small>
        {pomodoro !== 0 ?
          <SetPomodoro /> :
          <>
            <ul className='labels'>
              <li>
                <Button
                  title="Work"
                  activeClass={executing.active === "work" && "active-label"}
                  _callback={() => setCurrentTimer("work")}
                />
              </li>
              <li>
                <Button
                  title="Short Break"
                  activeClass={executing.active === "short" && "active-label"}
                  _callback={() => setCurrentTimer("short")}
                />
              </li>
              <li>
                <Button
                  title="Long Break"
                  activeClass={executing.active === "long" && "active-label"}
                  _callback={() => setCurrentTimer("long")}
                />
              </li>
            </ul>
            <Button title = "Settings" _callback={SettingsBtn} />
            <div className="time-container">
              <div className='time-wrapper'>
                <CountDownAnimation
                  key = {pomodoro}
                  timer = {pomodoro}
                  animate = {startAnimate}
                >
                  {children}
                </CountDownAnimation>
              </div>
            </div>
            <div className='button-swrapper'>
              <Button title='Start' className={!startAnimate && "active"} _callback={startTimer} />
              <Button title='Pause' className={startAnimate && "active"} _callback={pauseTimer} />
            </div>
          </>
        }
         
        {/* <CountdownCircleTimer/> */}
      </div>
    
    </>
  );
}

export default App
