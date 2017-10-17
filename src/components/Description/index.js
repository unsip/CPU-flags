import { Table }  from 'react-bootstrap'
import { Links }  from '../Links'
import PropTypes  from 'prop-types'
import React      from 'react'

import './index.css'

const Description = ({ searchResult }) =>
  <div className="Description">
    { searchResult.length
      ? <Table
          striped
          bordered
          hover
          responsive
        >
          <thead>
           <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Description</th>
            </tr>
          </thead>
          <tbody>
            { searchResult.map(([id, description]) =>
                <tr>
                  <td className="flag-name">{id.toLowerCase()}</td>
                  <td className="flag-description">
                    <span classname="flag-text">{description}</span>
                    <span classname="flag-button">
                      <Links />
                    </span>
                  </td>
                </tr>
            )}
          </tbody>
        </Table>
      : <p>Not found</p>
    }
  </div>


Description.PropTypes = { searchResult: PropTypes.object.isRequired }
Description.defaultProps = { searchResult: {} }

export { Description }
