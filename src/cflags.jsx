import React, { Component } from 'react';
import './cflags.css';


const Header = () =>
  <div>
    <h1>CFlags</h1>
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
  </ul>

class CFlags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flagList: this.props.flags,
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
      <div className="cflags">
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

export default CFlags;

// Components:
// - Header
// - Search form
// - Description
