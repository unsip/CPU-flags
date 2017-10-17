import { DropdownButton, MenuItem } from 'react-bootstrap'
import PropTypes          from 'prop-types'
import React              from 'react'

import './index.css'

const renderEntry = (entry, index) =>
  <MenuItem
    href={entry}
    key={index.toString()}
  >
    Link {index + 1}
  </MenuItem>

const Links = ({ linksList }) =>
  <DropdownButton
    title="Further reading"
    bsSize="small"
    id="dropdown-size-small"
  >
    { linksList.map(renderEntry) }
  </DropdownButton>

Links.propTypes = { linksList: PropTypes.array.isRequired }
Links.defaultProps = { linksList: ['link1', 'link2'] }

export { Links }
