import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'
import App from './App'

import '../scss/app.scss'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}

render(
    <App />,
    document.getElementById("app")
)