import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import PropTypes         from 'prop-types'
import React             from 'react'
import { DEFAULT_QUERY } from '../../constants'

import './index.css'

const Search = ({ value, onSubmit, onChange }) =>
  <form className="Search">
    <FormGroup>
      <InputGroup>
        <FormControl
          type="text"
          value={value}
          placeholder="Paste flags here..."
          onChange={onChange}
        />
        <InputGroup.Button>
          <Button
            bsStyle="primary"
            type="button"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  </form>


Search.propTypes = {
  value:    PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

Search.defaultProps = {
  value:    DEFAULT_QUERY,
}

export { Search }
