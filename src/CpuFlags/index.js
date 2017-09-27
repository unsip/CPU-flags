import { FLAGS }            from 'constants';
import PropTypes            from 'prop-types';
import React, { Component } from 'react';

import './index.css';


const Header = () =>
  <div>
    <h1>CPU Flags</h1>
  </div>

const Search = ({value, onSubmit, onChange}) =>
  <form>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button
      type="Submit"
      onClick={onSubmit}
    >Submit</button>
  </form>

// List of flags with description of each
// In case of invalid flag output an error
const Description = ({ searchResult }) =>
  <ul>
    {searchResult.map(flag =>
      <li>{flag.id} - {flag.description}</li>
    )}
    {console.log(searchResult)}
  </ul>

export default class CpuFlags extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flagList: FLAGS,
      result: null,
      searchTerm: ""
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
      this.setState({ searchTerm: event.target.value });
  }

  onSubmit(event) {
    let { searchTerm, flagList } = this.state;
    searchTerm = searchTerm.split(' ');
    // Search process
    const searchResult = flagList.filter(item => searchTerm.includes(item.id));
    this.setState({ result: searchResult });
    event.preventDefault();
  }

  render() {
    const { searchTerm, result } = this.state;
    return (
      <div className="cpuflags">
        <Header />

        <Search
          value={searchTerm}
          onSubmit={this.onSubmit}
          onChange={this.onSearchChange}
        />

        { result
          ? <Description
            searchResult={result}
            />
          : <p>No such flags found</p>
        }
      </div>
    );
  }
}
