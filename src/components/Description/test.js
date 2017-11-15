import React           from 'react'
import ReactDOM        from 'react-dom'
import { shallow }     from 'enzyme'

import { Description, renderDescription } from './index.js'


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

  // Expect `entry_number` + 1 (coz of header)
  it('renders one entry', () => {
    props.searchResult = [["tty", {
      'description': "TTY description",
      'links': [['TTY','dummy.org']],
    }]]
    const tableRow = description().find("tr")
    const anchor = description().find("a")
    expect(anchor.length).toBe(1)
    expect(tableRow.length).toBe(2)
  })

  it('renders few entries', () => {
    props.searchResult = [
      ["asd", {
        "description": "ADS description",
        "links": [["ADS", "dummy.com"]],
      }],
      ["eer", {
        "description": "EER description",
        "links": [["EER", "dummy.com"]],
      }],
      ["ll", {
        "description": "LL description",
        "links": [["LL", "dummy.com"]],
      }]
    ]
    const tableRow = description().find("tr")
    const anchor = description().find("a")
    expect(anchor.length).toBe(3)
    expect(tableRow.length).toBe(4)
  })
})

describe('Render links', () => {
  let description, expectedOutput, links, result

  beforeEach(() => {
    links = undefined
    description = undefined
    expectedOutput = undefined
  })

  it('works with zero links', () => {
    description = 'blah-blah'
    links = []
    expectedOutput = description

    expect(renderDescription(description, links)).toBe(expectedOutput)
  })

  it('places one link', () => {
    description = 'blah-blah'
    links = [['-blah', 'http://url.org']]
    const anchor = <a href={links[0][1]} target="_blank">{links[0][0]}</a>

    expectedOutput = expect.arrayContaining(['blah', anchor, ''])
    result = expect.arrayContaining(renderDescription(description, links))

    expect(result).toEqual(expectedOutput)
  })

  it('places two ordered links', () => {
    description = 'blah-blah something'
    links = [
      ['-blah', 'http://url.org'],
      ['something', 'http://agony.com']
    ]
    const anchor_one = <a href={links[0][1]} target="_blank">{links[0][0]}</a>
    const anchor_two = <a href={links[1][1]} target="_blank">{links[1][0]}</a>

    expectedOutput = expect.arrayContaining(['blah', anchor_one, ' ', anchor_two, ''])
    result = expect.arrayContaining(renderDescription(description, links))

    expect(result).toEqual(expectedOutput)
  })

  it('places three unordered links', () => {
    description = 'starting string, ending here'
    links = [
      ['here', 'http://url.org'],
      ['starting', 'http://agony.com'],
      ['string', 'http://random.it']
    ]
    const anchor_one = <a href={links[0][1]} target="_blank">{links[0][0]}</a>
    const anchor_two = <a href={links[1][1]} target="_blank">{links[1][0]}</a>
    const anchor_three = <a href={links[2][1]} target="_blank">{links[2][0]}</a>

    expectedOutput = expect.arrayContaining(['', anchor_two, " ", anchor_three, ', ending ', anchor_one, ''])
    result = expect.arrayContaining(renderDescription(description, links))

    expect(result).toEqual(expectedOutput)
  })
})
