import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>ثبت نام</h1>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="تلفن همراه" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="رمز ورود" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="تکرار رمز" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton color="success" block>ثبت نام</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
