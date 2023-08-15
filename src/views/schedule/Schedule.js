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
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { useHistory } from "react-router-dom";

//Api
import {
  getAllFieldsAxios,
} from "../../api/axios";



const Schedule = () => {

  const history = useHistory();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getAllFieldsAxios().then((res) => {
      setFields(res.data)
    });
    return () => {
    };
  }, []);

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
              </CRow >
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
                          <CButton onClick={() => { history.push(`/schedule/fields/${item.pk}`) }}
                            color="success">
                            <CIcon name="cil-magnifying-glass" />
                          </CButton>
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

export default Schedule
