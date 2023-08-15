import React, {
  useState,
  useEffect,
} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCollapse,
  CForm,
  CInputGroup,
  CInput,
  CButtonGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { useHistory } from "react-router-dom";

//Api
import {
  getAllFieldsAxios,
  deleteFieldAxios,
  postFieldAxios
} from "../../api/axios";



const Fields = () => {

  const history = useHistory();
  const [collapse1, setCollapse1] = useState(false)
  const [fields, setFields] = useState([]);
  const [f_code, setF_code] = useState('')
  const [f_name, setF_name] = useState('')

  useEffect(() => {
    getAllFieldsAxios().then((res) => {
      setFields(res.data)
    });
    return () => {
    };
  }, []);

  const toggle1 = (e) => {
    setCollapse1(!collapse1)
    e.preventDefault()
  }

  const handleDeleteField = (id) => {
    deleteFieldAxios(id).then((res) => {
      if (res.status === 204) {
        getAllFieldsAxios().then((res) => {
          setFields(res.data)
        });
      }
    });
  };



  const handlePostField = () => {
    postFieldAxios({ name: f_name, code: f_code }).then((res) => {
      if (res.status === 201) {
        getAllFieldsAxios().then((res) => {
          setFields(res.data)
        });
      }
    });
  };


  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <CRow className="align-items-center">
                <CCol sm="10" >
                  رشته های درسی
                </CCol>
                <CCol sm="2" >
                  <CButton onClick={toggle1} block color="light">افزودن</CButton>
                </CCol>

              </CRow >
              <CCollapse show={collapse1}>
                <CCardBody className="justify-content-center">
                  <CForm>
                    <CInputGroup className="mb-3">
                      <CInput value={f_code} onInput={e => setF_code(e.target.value)} type="text" placeholder="کد رشته" />
                      <CInput value={f_name} onInput={e => setF_name(e.target.value)} type="text" placeholder="نام رشته" />
                    </CInputGroup>
                    <CButton onClick={handlePostField} color="success" block>افزودن</CButton>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={fields.reverse()}
                fields={['کد رشته', 'نام رشته', 'عملیات',]}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'کد رشته':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.code}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'نام رشته':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.name}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'عملیات':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CButtonGroup>
                            <CButton onClick={() => { history.push(`/fields/${item.pk}`) }}
                              color="warning"><CIcon name="cil-magnifying-glass" /></CButton>
                            <CButton onClick={() => { handleDeleteField(item.pk) }}
                              color="danger"><CIcon name="cil-trash" /></CButton>
                          </CButtonGroup>
                        </CRow>
                      </td>
                    ),

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>


    </>
  )
}

export default Fields
