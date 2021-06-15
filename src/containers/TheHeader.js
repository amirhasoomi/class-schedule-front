import React from 'react'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
} from './index'

const TheHeader = () => {

  return (
    <CHeader withSubheader>
      <CHeaderNavItem><h3>sdouivyhsdoiuvh</h3></CHeaderNavItem>
      <CHeaderNav className="d-md-down-none mr-auto">
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
