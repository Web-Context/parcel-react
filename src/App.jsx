import React, { useState, useEffect, useMemo } from 'react';

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}

function encode(number) {
    wait(1000)
    return Date.now()
}


function App() {

    const [name, setName] = useState('john')
    const [number, setNumber] = useState(0)

    const onChange = function (e) {
        if (e.target.getAttribute('name') === 'name') {
            setName(e.target.value)
        }
        if (e.target.name === 'number') {
            setNumber(e.target.value)
        }
    }
    const encoded = useMemo(function () {
        return encode(number)
    }, [number])


    return <div>
        <div className="form-group">
            <label htmlFor="name" ></label>
            <input name="name" id="name" type="text" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="number" ></label>
            <input name="number" id="number" type="number" value={number} onChange={onChange} />
        </div>
        <h2>Encoded</h2>
        {encoded}
    </div>

}

export default App 
