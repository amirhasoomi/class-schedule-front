import React from 'react'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CRow,
  CCol,
  CButton
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
      <CHeaderNav className="d-md-down-none mr-auto">
          <CCol col="2" xl className="mb-3 mb-xl-0">
            <CButton block  color="link">پروفایل</CButton>
          </CCol>
          <CCol col="2" xl className="mb-3 mb-xl-0">
            <CButton block variant="outline" color="danger">خروج</CButton>
          </CCol>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
