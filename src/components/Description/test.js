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
    const message = <p>Not found</p>
    expect(description().contains(message)).toBe(true)
  })

  // Expect `entry_number` + 1 (coz of header)
  it('renders one entry', () => {
    props.searchResult = [["tty", {
      'description': "TTY description",
      'links': []
    }]]
    const tableRow = description().find("tr")
    expect(tableRow.length).toBe(2)
  })

  it('renders few entries', () => {
    props.searchResult = [
      ["asd", {
        "description": "ADS description",
        "links": ["dummy.com"]
      }],
      ["eer", {
        "description": "EER description",
        "links": ["dummy.com"]
      }],
      ["ll", {
        "description": "LL description",
        "links": ["dummy.com"]
      }]
    ]
    const tableRow = description().find("tr")
    expect(tableRow.length).toBe(4)
  })
})
