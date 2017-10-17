import React    from 'react'
import ReactDOM from 'react-dom'

import { LoadingButton } from './index.js'

it('LoadingButton renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoadingButton />, div)
})
