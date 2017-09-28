import PropTypes         from 'prop-types';
import React             from 'react';
import { DEFAULT_QUERY } from '../../constants';

import './index.css';

const Search = ({value, onSubmit, onChange }) =>
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

Search.propTypes = {
  value:    PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value:    DEFAULT_QUERY,
};

export { Search };
