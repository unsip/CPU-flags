import PropTypes         from 'prop-types'
import React             from 'react'
import { DEFAULT_QUERY } from '../../constants'

import {
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup
} from 'react-bootstrap'

import './index.css'

const Search = ({ value, onSubmit, onChange }) =>
  <Form
    inline
    className="Search"
    onSubmit={onSubmit}
  >
    <InputGroup>
      <FormControl
        type="text"
        placeholder="Paste flags here..."
        onChange={onChange}
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

Search.propTypes = {
  value:    PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

Search.defaultProps = {
  value:    DEFAULT_QUERY,
}

export { Search }
