import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback, useRef } from 'react'
import { render } from 'react-dom'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}


function App() {
    const [count, setCount] = useState(0)
    const button = useRef(null)
    const increment = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    useLayoutEffect(() => {
        if(count %2 === 0){
            button.current.style.color = 'green'
        }else{
            button.current.style.color = 'red'

        }
    })

    return <div>
        <button onClick={increment} ref={button}>
            Incrément {count}
        </button>
    </div>
}

export default App