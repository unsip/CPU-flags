import { Table }  from 'react-bootstrap'
import PropTypes  from 'prop-types'
import React      from 'react'

import './index.css'

const renderLinks = (linksList) => {
  const namings = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
  const links = linksList.map((link, currId) =>
    <a key={currId} href={link} target="_blank"> { namings[currId] } </a>
  )
  return links
}

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
              <th className="table-header">Further reading</th>
            </tr>
          </thead>
          <tbody>
            { searchResult.map(([id, contents]) =>
                <tr key={id}>
                  <td className="flag-name">{id}</td>
                  <td className="flag-description">
                    <p className="flag-text">
                      {contents['description']}
                    </p>
                  </td>
                  <td className="flag-links">
                    { renderLinks(contents['links']) }
                  </td>
                </tr>
            )}
          </tbody>
        </Table>
      : <p>Not found</p>
    }
  </div>


Description.PropTypes = { searchResult: PropTypes.array.isRequired }
Description.defaultProps = { searchResult: [] }

export { Description }
