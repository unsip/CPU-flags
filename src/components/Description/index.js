import PropTypes  from 'prop-types';
import React      from 'react';

const Description = ({ searchResult }) =>
  <ul>
    { Object.entries(searchResult).map(([id, description]) =>
        <li>{id} - {description}</li>
    )}
  </ul>

Description.PropTypes = { searchResult: PropTypes.object.isRequired };

export { Description };
