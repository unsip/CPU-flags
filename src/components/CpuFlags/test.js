import CpuFlags from './index.js'
import React    from 'react'
import ReactDOM from 'react-dom'

it('CpuFlags renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CpuFlags />, div)
})
