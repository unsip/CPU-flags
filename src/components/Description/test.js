import React           from 'react'
import ReactDOM        from 'react-dom'
import { shallow }     from 'enzyme'

import { Description } from './index.js'


describe('Description component', () => {
  let props
  let shallowDescription

  const description = () => {
    if (!shallowDescription) {
      shallowDescription = shallow(
        <Description {...props} />
      )
    }
    return shallowDescription
  }

  beforeEach(() => {
    props = {
      searchResult: undefined,
    }
    shallowDescription = undefined
  })

  it('`not found` message renders', () => {
    props.searchResult = {}
    const message = <h2>Not found</h2>
    expect(description().contains(message)).toBe(true)
  })

  it('renders one entry', () => {
    props.searchResult = { tty: "TTY description" }
    const li = description().find("li")
    expect(li.length).toBe(1)
  })

  it('renders few entries', () => {
    props.searchResult = {
      asd: "ADS description",
      eer: "EER description",
      ll:  "LL description"
    }
    const li = description().find("li")
    expect(li.length).toBe(3)
  })
})
