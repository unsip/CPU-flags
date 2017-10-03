import PropTypes  from 'prop-types'
import React      from 'react'

const Description = ({ searchResult }) =>
  <div>
    { Object.keys(searchResult).length
      ? <ul>
          { Object.entries(searchResult).map(([id, description]) =>
              <li>{id} - {description}</li>
          )}
        </ul>
      : <h2>Not found</h2>
    }
  </div>

Description.PropTypes = { searchResult: PropTypes.object.isRequired }
Description.defaultProps = { searchResult: {} }

export { Description }
