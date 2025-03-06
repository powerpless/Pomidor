import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingContext } from "../context/SettingsContext"

const CountDownAnimation = ({key = 1,timer = 20,animate = true, children}) => {
    
    const {stopTimer} = useContext(SettingContext)
    return (
        <CountdownCircleTimer
            key = {key} 
            isPlaying={animate}
            duration={timer * 60}
            colors={[['#004777', 0.33]]}
            strokeWidth={6}
            size ={220}
            trailColor="#1a1a1a"
            onComplete={() => {
                stopTimer()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountDownAnimation