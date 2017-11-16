import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import {
  Button,
  Form,
  FormControl,
  InputGroup
} from 'react-bootstrap'

import './index.css'

class Search extends Component {
  componentDidMount() {
    this.input.focus()
  }

  render() {
    const { onSubmit, onChange } = this.props

    return (
      <Form
        horizontal
        className="search"
        onSubmit={event => onSubmit(event, this.input)}
      >
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Paste flags here..."
            onChange={onChange}
            inputRef={node => { this.input = node }}
          />
          <InputGroup.Button>
            <Button
              bsStyle="primary"
              type="submit"
            >
              Search
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    )
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export { Search }
