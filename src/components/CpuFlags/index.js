import React, { Component } from 'react'

import { Description }      from '../Description'
import { Search }           from '../Search'

import {
  FLAGS,
  DEFAULT_QUERY
} from '../../constants'

import './index.css'


export default class CpuFlags extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flagList: FLAGS,
      result: null,
      searchTerm: DEFAULT_QUERY
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
      this.setState({ searchTerm: event.target.value })
      event.preventDefault()
  }

  onSubmit(event) {
    let { searchTerm, flagList } = this.state
    // Possible bug: splitting cause many entries in case of whitespace
    searchTerm = searchTerm.split(' ')
    // Search process
    let searchResult = {}

    for (let flag of searchTerm) {
      if (flagList[flag]) {
        searchResult[flag] = flagList[flag]
      }
    }

    this.setState({ result: searchResult })
    event.preventDefault()
  }

  render() {
    const { searchTerm, result } = this.state
    return (
      <div className="cpuflags">
        <h1>CPU Flags</h1>

        <Search
          value={searchTerm}
          onSubmit={this.onSubmit}
          onChange={this.onSearchChange}
        />

        { result
          ? <Description            // List of flags with description of each
            searchResult={result}
            />
          : <p>No such flags found</p>
        }
      </div>
    )
  }
}
