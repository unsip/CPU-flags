import React      from 'react'
import ReactDOM   from 'react-dom'

import { Search } from './index.js'

it('Search renders without crashing', () => {
  const div = document.createElement('div')
  const dummyFunction = function() { return undefined }
  const dummy =
    <Search
      value={""}
      onSubmit={dummyFunction}
      onChange={dummyFunction}
    />
  ReactDOM.render(dummy, div)
})
