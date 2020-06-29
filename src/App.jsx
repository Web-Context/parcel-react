import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'

const Button = React.memo(function ({ onClick }) {
    console.log('render')
    return <div><button onClick={onClick}>Mon Bouton</button></div>
})

function App() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(function () {
        alert('bonjour ' + count)
    }, [count])

    return <div clasName="container">
        <header><h1>Button Incremental</h1></header>
        <div id="content">
        <Button onClick={handleClick} />
        <button onClick={() => setCount(c => c + 1)}>Incrémenter {count}</button>
 
        </div>
    </div>
}

export default App