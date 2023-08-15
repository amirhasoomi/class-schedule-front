import React, {
  useState
} from 'react'
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
  CRow
} from '@coreui/react'
import { useHistory } from "react-router-dom";

//Api
import {
  RegisterAxios
} from "../../../api/axios";

const Register = () => {

  const history = useHistory();
  const [mobile, setMobile] = useState('')
  const [pass, setPass] = useState('')


  const handleRegister = () => {
    RegisterAxios({ mobile: mobile, password: pass }).then(() => {
      history.push(`/panel`)
    });
  };
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
                    <CInput value={mobile} onInput={e => setMobile(e.target.value)} type="text" placeholder="تلفن همراه" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                    </CInputGroupPrepend>
                    <CInput value={pass} onInput={e => setPass(e.target.value)} type="password" placeholder="رمز ورود" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="تکرار رمز" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton onClick={handleRegister} color="success" block>ثبت نام</CButton>
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
