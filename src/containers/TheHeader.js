import React, {
} from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import {
  CHeader,
  CHeaderNav,
  CCol,
  CButton
} from '@coreui/react'

const TheHeader = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push(`/`)
  };


  if (localStorage.length <= 1) {
    return (
      <CHeader withSubheader>
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
        <CHeaderNav className="d-md-down-none mr-auto">
          <Link to='/panel'>
            <CCol col="2" xl className="mb-3 mb-xl-0">
              <CButton block color="link">میزکار</CButton>
            </CCol>
          </Link>
          <CCol col="2" xl className="mb-3 mb-xl-0">
            <CButton onClick={handleLogout} block variant="outline" color="danger">خروج</CButton>
          </CCol>
        </CHeaderNav>
      </CHeader>
    )
  }

}

export default TheHeader
