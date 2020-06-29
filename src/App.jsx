import React, { useReducer } from 'react'
import { render } from 'react-dom'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}

function init(initialValue) {
    return { count: initialValue }
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + (action.payload || 1) };
        case 'decrement':
            if (state.count <= 0) {
                return state
            }
            return { count: state.count - (action.payload || 1) };
        case 'reset':
            return init(0);
        default:
            throw new Error("L'action" + action.type + " est inconnue")
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, 0, init)

    return <div>
        Compteur: {JSON.stringify(count)}
        <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>+10</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>-10</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Réinitialiser</button>
    </div>
}

export default App