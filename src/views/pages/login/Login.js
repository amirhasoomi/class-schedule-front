import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
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
//Api
import {
  LoginAxios
} from "../../../api/axios";


const Login = () => {
  const history = useHistory()
  const [mobile, setMobile] = useState('');
  const [pass, setPass] = useState('');
  const handleLogin = () => {
    LoginAxios({ mobile, password: pass }).then(() => {
      history.push(`/`)
    });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>ورود</h1>
                  <p className="text-muted">به حساب خود وارد شوید</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput value={mobile} onInput={e => setMobile(e.target.value)} type="text" placeholder="موبایل" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput value={pass} onInput={e => setPass(e.target.value)} type="password" placeholder="رمز عبور" autoComplete="current-password" />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton color="primary" className="px-4" onClick={handleLogin}>ورود</CButton>
                    </CCol>
                    <CCol xs="6" className="text-right">
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>

          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
