import * as React from "react"
import PropTypes from "prop-types"

import CrosswayNav from "./crosswayNav";

const Header = ({ siteTitle, pageInfo }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <CrosswayNav pageInfo={pageInfo} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
