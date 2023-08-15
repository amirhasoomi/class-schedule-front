import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
  CCol,
  CButton
} from '@coreui/react'
import { Link } from 'react-router-dom'

// routes config
import routes from '../routes'

import {
  TheHeaderDropdown
} from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }
  if (localStorage.length <= 1) {
    return (
      <CHeader withSubheader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />
        <CHeaderBrand className="mx-auto d-lg-none" to="/">
          سامانه کلاس بندی
        </CHeaderBrand>
        <CHeaderNav className="d-md-down-none mr-auto">
          <Link to="/login">
            <CCol col="2" xl className="mb-3 mb-xl-0">
              <CButton block variant="outline" color="primary">ورود</CButton>

            </CCol>
          </Link>
        </CHeaderNav>
      </CHeader>
    )
  }
  else {
    return (
      <CHeader withSubheader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />
        <CHeaderBrand className="mx-auto d-lg-none" to="/">
          سامانه کلاس بندی
        </CHeaderBrand>

        <CHeaderNav className="px-3">
          <TheHeaderDropdown />
        </CHeaderNav>

        <CSubheader className="px-3 justify-content-between">
          <CBreadcrumbRouter
            className="border-0 c-subheader-nav m-0 px-0 px-md-3"
            routes={routes}
          />
        </CSubheader>
      </CHeader>
    )
  }
}

export default TheHeader