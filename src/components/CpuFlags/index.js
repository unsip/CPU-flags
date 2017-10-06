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
      flagList:   FLAGS,
      result:     FLAGS,
      searchTerm: DEFAULT_QUERY
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  searchFlags(searchTerm, flagList) {
    // Warning: splitting creates many entries in case of whitespaces
    let splittedFlags = searchTerm.split(' ')
    let searchResult = {}

    for (let flag of splittedFlags) {
      flag = flag.toUpperCase()
      if (flagList[flag]) {
        searchResult[flag] = flagList[flag]
      }
    }

    return searchResult
  }

  // Change values in search field as user typing
  onSearchChange(event) {
      this.setState({ searchTerm: event.target.value })
  }

  // Do not search when got blank input
  needsToSearchFlags(searchTerm) {
    return searchTerm.replace(/\s/g, '') === ''
  }

  // Submit query, search flags if needed
  onSubmit(event) {
    const { searchTerm, flagList } = this.state
    let searchResult

    if (!this.needsToSearchFlags(searchTerm)) {
      searchResult = this.searchFlags(searchTerm, flagList)
    } else {
      searchResult = flagList
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

        <Description searchResult={result} />
      </div>
    )
  }
}
