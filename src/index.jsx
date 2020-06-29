import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}

const Button = React.memo(function ({ onClick }) {
    console.log('render')
    return <button onClick={onClick}>Mon Bouton</button>
})

function App() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(function () {
        alert('bonjour')
    }, [])

    return <div>
        <Button onClick={handleClick} />
        <button onClick={() => setCount(c => c + 1)}>Incrémenter {count}</button>
    </div>
}

render(
    <App />,
    document.getElementById("app")
)