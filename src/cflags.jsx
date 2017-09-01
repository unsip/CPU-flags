import React, { Component } from 'react';
import './cflags.css';

const Header = ({}) =>
  <div>
    <h1>CFlags</h1>
  </div>

const Search = ({value, onSubmit}) =>
  <form>
    <input
      type="text"
      value={value}
    />
    <button type="Submit">Submit</button>
  </form>

// List of flags with description of each
// In case of invalid flag output an error
const Description = ({ searchTerm, flagList }) =>
  <ul>
    {  }
  </ul>

class CFlags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: null
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, result } = this.state;
    return (
      <div className="cflags">
        <Header />
        <Search
          value={searchTerm}
          onSubmit={this.onSubmit}
        />
        <Description />
      </div>
    );
  }
}

export default CFlags;

// Components:
// - Header
// - Search form
// - Description
