import { Table }  from 'react-bootstrap'
import PropTypes  from 'prop-types'
import React      from 'react'

import './index.css'

const Description = ({ searchResult }) =>
  <div className="Description">
    { Object.keys(searchResult).length
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
            { Object.entries(searchResult).map(([id, description]) =>
                <tr>
                  <td className="flag-name">{id}</td>
                  <td className="flag-description">{description}</td>
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
