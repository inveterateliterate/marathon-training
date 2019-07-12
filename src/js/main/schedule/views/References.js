import React from 'react'
// import PropTypes from 'prop-types'
import { Header } from 'components'
import { Link } from 'react-router-dom'

const propTypes = {}

const defaultProps = {}

function References () {
  return (
    <div>
      <Header />
      <div className="content-block-container">
        <ul className="card">
          <li>
            <Link to="https://www.chicagomarathon.com/">
              Chicago Marathon 2018 Official Site
            </Link>
          </li>
          <li>
            <Link to="https://www.halhigdon.com/training-programs/marathon-training/intermediate-1-marathon/">
              Hal Higdon Intermediate 1 Training Program
            </Link>
          </li>
          <li>
            <Link to="http://www.marathon-training-tips.com/18-week-marathon-training.html">
              Marathon Training Tips 18-week Program
            </Link>
          </li>
          <li>
            <Link to="https://assets-chicagomarathon-com.s3.amazonaws.com/wp-content/uploads/2018/06/Marathon_Training_Plan_2018_v4.pdf">
              Nike Chicago Marathon Training Program
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

References.propTypes = propTypes
References.defaultProps = defaultProps

export default References
