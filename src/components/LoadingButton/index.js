import { Button }           from 'react-bootstrap'
import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import './index.css'


class LoadingButton extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: false }
  }

  render() {
    let { isLoading } = this.state
    const { onClick } = this.props

    return (
      <Button
       bsStyle="primary"
       disabled={isLoading}
       onClick={!isLoading ? onClick : null}
      >
       { isLoading ? 'Loading...' : 'More' }
      </Button>
    )
  }
}

LoadingButton.propTypes = { onClick: PropTypes.func.isRequired }

export { LoadingButton }
