import React, { Component } from 'react'
import { Alert }            from 'react-bootstrap'

import { Description }      from '../Description'
import { Search }           from '../Search'

import {
  DEFAULT_QUERY,
  FLAGS
} from '../../constants'

import './index.css'


export default class CpuFlags extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flagList:       FLAGS,
      result:         FLAGS,
      undefinedFlags: [],
      searchTerm:     DEFAULT_QUERY
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  searchFlags(searchTerm, flagList) {
    let splittedFlags = searchTerm.split(' ')
    let searchResult = {}
    let undefinedFlags = []

    for (let flag of splittedFlags) {
      flag = flag.toLowerCase()
      if (flagList[flag])
        searchResult[flag] = flagList[flag]
      else
        undefinedFlags.push(flag)
    }

    return [ searchResult, undefinedFlags ]
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
    let searchResult = {}
    let undefinedFlags = []

    if (!this.needsToSearchFlags(searchTerm))
      [ searchResult, undefinedFlags ] = this.searchFlags(searchTerm, flagList)


    this.setState({
      result: searchResult,
      undefinedFlags: undefinedFlags
    })
  }

  render() {
    const { searchTerm, result, undefinedFlags } = this.state

    return (
      <div className="cpuflags">
        <h1>CPU Flags</h1>

        <p className="usage">
          Start searching by copying output of <code>cat /proc/cpuinfo | grep flags</code> and pasting it below
        </p>

        <Search
          value={searchTerm}
          onSubmit={this.onSubmit}
          onChange={this.onSearchChange}
        />

        { undefinedFlags.length
            ? <Alert
                bsStyle="danger"
                className="unmatched"
              >
                <strong>Unmatched flags:</strong> {undefinedFlags.join(' ')}
              </Alert>
          : null
        }

        <Description searchResult={Object.entries(result)} />
      </div>
    )
  }
}
