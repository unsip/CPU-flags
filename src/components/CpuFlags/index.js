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
      result: {},
      searchTerm: DEFAULT_QUERY
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  searchFlags(searchTerm, flagList) {
    // Warning: splitting cause many entries in case of whitespace
    let splittedFlags = searchTerm.split(' ')
    let searchResult = {}

    for (let flag of splittedFlags) {
      flag = flag.toLowerCase()
      if (flagList[flag]) {
        searchResult[flag] = flagList[flag]
      }
    }

    return searchResult
  }

  onSearchChange(event) {
      this.setState({ searchTerm: event.target.value })
      event.preventDefault()
  }

  onSubmit(event) {
    let { searchTerm, flagList } = this.state
    let searchResult = this.searchFlags(searchTerm, flagList)
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
