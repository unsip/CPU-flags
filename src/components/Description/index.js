import FontAwesome          from 'react-fontawesome'
import PropTypes            from 'prop-types'
import React, { Component } from 'react'
import { Table }            from 'react-bootstrap'

import './index.css'

const renderLinks = (linksList) => {
  const namings = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
  const links = linksList.map((link, currId) =>
    <a key={currId} href={link} target="_blank"> { namings[currId] } </a>
  )

  return [<b key="linkHeading"> Links: </b>].concat(links)
}

const Sort = ({ isSortReverse, onSort, children }) => {
  const iconType = isSortReverse ? "sort-desc" : "sort-asc"
  return (
    <button
      onClick={onSort}
      className="button-inline"
      type="button"
    >
      { children }<FontAwesome name={iconType} />
    </button>
  )
}

class Description extends Component {
  constructor(props) {
    super(props)

    this.state = { isSortReverse: false }
    this.onSort = this.onSort.bind(this)
  }

  onSort() {
    const isSortReverse = !this.state.isSortReverse
    this.setState({ isSortReverse: isSortReverse })
  }

  render() {
    const { isSortReverse } = this.state
    const { searchResult } = this.props

    const sortedResult = searchResult.sort((a, b) =>
      (a[0] < b[0]) ? -1 : (a[0] > b[0]) ? 1 : 0
    )
    const reversedResult = isSortReverse
      ? sortedResult.reverse()
      : sortedResult

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
                    <Sort onSort={this.onSort} isSortReverse={isSortReverse}>
                      Name
                    </Sort>
                  </th>
                  <th className="table-header">Description</th>
                </tr>
              </thead>
              <tbody>
                { reversedResult.map(([id, contents]) =>
                    <tr key={id}>
                      <td className="flag-name">{id}</td>
                      <td>
                        <p className="flag-description">
                          {contents['description']}
                          { contents['links'].length
                            ? renderLinks(contents['links'])
                            : null
                          }
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

export { Description }
