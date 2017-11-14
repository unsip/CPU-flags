import FontAwesome          from 'react-fontawesome'
import PropTypes            from 'prop-types'
import React, { Component } from 'react'
import { Table }            from 'react-bootstrap'

import './index.css'

const renderDescription = (description, links) => {
  if (!links.length)
    return description

  description = [description]
  let anchorIndex, anchorElement, splittedDescription

  // link[0] - sticky words to point anchor to
  // link[1] - href for anchor
  // 1. Find index of string which contains sticky word
  // 2. Replace it with splitted string and jsx-anchor in between
  for (let link of links) {
    anchorIndex = description.findIndex(strg =>
      typeof strg === 'string' && strg.includes(link[0])
    )
    if (anchorIndex !== -1) {
      splittedDescription = description[anchorIndex].split(link[0])
      anchorElement = <a href={link[1]} target="_blank">{link[0]}</a>
      splittedDescription.splice(1, 0, anchorElement)
      Array.prototype.splice.apply(description, [anchorIndex, 1].concat(splittedDescription))
    }
  }

  return description
}

const Sort = ({ isSorted, isSortReverse, onSort, children }) => {
  const iconType = isSorted ? (isSortReverse ? "sort-desc" : "sort-asc") : "sort"
  return (
    <button
      onClick={onSort}
      className="button-inline"
      type="button"
    >
      { children } <FontAwesome name={iconType} />
    </button>
  )
}

class Description extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSortReverse: false,
      isSorted:      false
    }
    this.onSort = this.onSort.bind(this)
  }

  onSort() {
    const isSortReverse = !this.state.isSortReverse
    this.setState({
      isSortReverse: isSortReverse,
      isSorted: true
    })
  }

  render() {
    const { isSorted, isSortReverse } = this.state
    const { searchResult } = this.props
    let resultToRender

    if (isSorted) {
      const sortedResult = searchResult.sort((a, b) =>
        (a[0] < b[0]) ? -1 : (a[0] > b[0]) ? 1 : 0
      )
      resultToRender = isSortReverse
        ? sortedResult.reverse()
        : sortedResult
    }
    else
      resultToRender = searchResult

    return (
      <div className="Description">
        { searchResult.length
          ? <Table
              striped
              bordered
              hover
              responsive
            >
              <thead>
                <tr>
                  <th className="table-header">
                    <Sort
                      onSort={this.onSort}
                      isSortReverse={isSortReverse}
                      isSorted={isSorted}
                    >
                      Name
                    </Sort>
                  </th>
                  <th className="table-header">Description</th>
                </tr>
              </thead>
              <tbody>
                { resultToRender.map(([id, contents]) =>
                    <tr key={id}>
                      <td className="flag-name">{id}</td>
                      <td>
                        <p className="flag-description">
                          {renderDescription(contents['description'], contents['links'])}
                        </p>
                      </td>
                    </tr>
                )}
              </tbody>
            </Table>
          : null
        }
      </div>
    )
  }
}


Description.PropTypes = { searchResult: PropTypes.array.isRequired }
Description.defaultProps = { searchResult: [] }

export { Description, renderDescription }
