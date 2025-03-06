import { useState } from "react"
import { createContext } from "react"

export const SettingContext = createContext()

const SettingsContextProvider = (props) => {
    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    

    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    function setCurrentTimer(active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings    )
    }

    const setTimerTime = evalute => {
        switch (evalute.active) {
            case "work":
                setPomodoro(evalute.work)
                break;

            case "short":
                setPomodoro(evalute.short)
                break;

            case "long":
                setPomodoro(evalute.long)
                break;        
        
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return `${minutes}:${seconds}`
    }

    return (
        <SettingContext.Provider
         value={{
            stopTimer,
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingsBtn,
            setCurrentTimer,
            updateExecute,
            children

            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider