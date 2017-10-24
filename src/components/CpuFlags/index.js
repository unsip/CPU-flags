import React, { Component } from 'react'

import { Description }      from '../Description'
import { LoadingButton }    from '../LoadingButton'
import { Search }           from '../Search'

import {
  DEFAULT_QUERY,
  ENTRIES_STEP,
  FLAGS,
  NUMBER_OF_ENTRIES
} from '../../constants'

import './index.css'


export default class CpuFlags extends Component {

  constructor(props) {
    super(props)

    this.state = {
      entriesNumber: NUMBER_OF_ENTRIES,
      flagList:      FLAGS,
      result:        FLAGS,
      searchTerm:    DEFAULT_QUERY
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  loadMore() {
    let { entriesNumber } = this.state
    entriesNumber += ENTRIES_STEP
    this.setState({ entriesNumber: entriesNumber })
  }

  searchFlags(searchTerm, flagList) {
    let splittedFlags = searchTerm.split(' ')
    let searchResult = {}

    for (let flag of splittedFlags) {
      flag = flag.toLowerCase()
      if (flagList[flag])
        searchResult[flag] = flagList[flag]
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
    event.preventDefault()
    const { searchTerm, flagList } = this.state
    let searchResult

    if (!this.needsToSearchFlags(searchTerm))
      searchResult = this.searchFlags(searchTerm, flagList)
    else
      searchResult = flagList

    this.setState({ result: searchResult })
  }

  render() {
    const { searchTerm, result, entriesNumber } = this.state
    const resultList = (
      Object.entries(result) &&
      Object.entries(result).slice(0, entriesNumber + 1)
    ) || []

    return (
      <div className="cpuflags">
        <h1>CPU Flags</h1>

        <Search
          value={searchTerm}
          onSubmit={this.onSubmit}
          onChange={this.onSearchChange}
        />

        <p className="usage">
          Copy output of
          <code> cat /proc/cpuinfo | grep flags </code>
          and paste it into search.
        </p>

        <Description searchResult={resultList} />

        { resultList.length !== Object.entries(result).length
          ? <LoadingButton
              onClick={() => this.loadMore()}
            />
          : null
        }

      </div>
    )
  }
}
