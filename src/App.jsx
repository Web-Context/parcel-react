import React, { useState, useEffect, useMemo, useCallback,useRef } from 'react'
import { render } from 'react-dom'


function App() {

    const input = useRef(null)
    const counter = useRef({count:0})

    const handleButtonClick = function(){
        counter.current.count++
        console.log(counter)
    }

    return <div>
        <input type="text" ref={input}/>
        <button onClick = {handleButtonClick}>Récupérer la valeur</button>
    </div>
}

export default App