import { useEffect, useState } from "react"

import s from "./Counter.module.css"


const Counter = () => {
    
    const [count, setCount] = useState(() => {
        let localCount = JSON.parse(localStorage.getItem("count"))
        if (localCount !== null) {
            return localCount
        }
        return 1
    });

    const [step, setStep] = useState(() => {
        const localeStep = JSON.parse(localStorage.getItem("step"))
        if (localeStep !== null) {
            return localeStep
        }
        return 1
    })

    const locaData = useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
        localStorage.setItem("step", JSON.stringify(step))
    }, [count, step])

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
                <button onClick={handleClickMinus} disabled={count ? false : true}>Minus</button>
                <button onClick={handleReset} disabled={count === 1 ? true : false} >Reset </button>
                <button onClick={handleClickPus}>Plus</button> 
            </div>
        </div>
    )
    
}


export default Counter