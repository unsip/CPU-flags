import React, { Component } from 'react'
import { Alert }            from 'react-bootstrap'
import { CopyToClipboard }  from 'react-copy-to-clipboard'

import { Description }      from '../Description'
import { Search }           from '../Search'

import {
  DEFAULT_QUERY,
  FLAGS
} from '../../constants'

import './index.css'


const CopyCommand = ({ isCopied, onCopy }) => {
  const command = "cat /proc/cpuinfo | grep flags | sed 's/^.*: //'"
  const colorClass = isCopied ? 'text-success code' : 'code'

  return(
    <CopyToClipboard
      text={command}
      onCopy={onCopy}
    >
      <code className={colorClass}>
        <button className="rounded copyButton">
          {command}
        </button>
      </code>
    </CopyToClipboard>
  )
}

export default class CpuFlags extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flagList:       FLAGS,
      isCopied:       false,
      result:         {},
      searchTerm:     DEFAULT_QUERY,
      undefinedFlags: []
    }

    this.onCopy = this.onCopy.bind(this)
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
      else if (!undefinedFlags.includes(flag))
        undefinedFlags.push(flag)
    }

    return [ searchResult, undefinedFlags ]
  }

  onCopy() {
    this.setState({ isCopied: true })
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
  onSubmit(event, inputElement) {
    event.preventDefault()
    inputElement.select()
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
    const { isCopied, result, undefinedFlags } = this.state

    return (
      <div className="cpuflags">
        <h1>CPU Flags</h1>

        <p className="usage">
          Start searching by copying output of&nbsp;
            <CopyCommand isCopied={isCopied} onCopy={this.onCopy} />
          &nbsp;and pasting it below
        </p>

        <Search
          onSubmit={this.onSubmit}
          onChange={this.onSearchChange}
        />

        { undefinedFlags.length
            ? <Alert
                bsStyle="danger"
                className="unmatched"
              >
                <strong>Unknown flags:</strong> {undefinedFlags.join(' ')}
              </Alert>
          : null
        }

        <Description searchResult={Object.entries(result)} />
      </div>
    )
  }
}
