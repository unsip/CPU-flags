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
      : <p>Not found</p>
    }
  </div>

Description.PropTypes = { searchResult: PropTypes.object.isRequired }
Description.defaultProps = { searchResult: {} }

export { Description }
