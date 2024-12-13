import { useState } from "react"

import s from "./Counter.module.css"


const Counter = () => {
    
    const lalala = 5;
    const [count, setCount] = useState(1)

    const [step, setStep] = useState(1)

    const handleClickPus = () => {
        setCount(prev => prev + step)        
    }

    const handleClickMinus = () => {
        if (count > 0) {
            setCount(prev => prev - step)
        }
        return
    }

    const handleReset = () => {
        setCount(1)
        setStep(1)
    }

    return (
        <div className={s.wrapper}>
            <input type="number" value={step} onChange={event => {
                setStep(+event.target.value)
            }
            } />
            <h1>{count}</h1>
            <div className={s.buttons}>
                <button onClick={handleClickMinus}>Minus</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleClickPus} {lalala ? alert("lalala") : alert("aaaa") } disabled="disablet"   >Plus</button> 
            </div>
        </div>
    )
    
}


export default Counter