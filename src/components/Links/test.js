import React    from 'react'
import ReactDOM from 'react-dom'

import { Links } from './index.js'

it('Links renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Links />, div)
})
