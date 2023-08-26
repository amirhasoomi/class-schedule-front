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

//Api
import {
  getPlatosAxios,
  deletePlatoAxios,
  postPlatoAxios
} from "../../api/axios";

const Platos = () => {

  const [collapse1, setCollapse1] = useState(false)
  const [platos, setPelatos] = useState([]);
  const [building, setBuilding] = useState('')
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState()

  useEffect(() => {
    getPlatosAxios().then((res) => {
      setPelatos(res.data.reverse())
    });
    return () => {
    };
  }, []);

  const toggle1 = (e) => {
    setCollapse1(!collapse1)
    e.preventDefault()
  }

  const handleDeleteField = (id) => {
    deletePlatoAxios(id).then((res) => {
      if (res.status === 204) {
        getPlatosAxios().then((res) => {
          setPelatos(res.data.reverse())
        });
      }
    });
  };



  const handlePostField = () => {
    postPlatoAxios({ building: building, name: name, capacity: capacity }).then((res) => {
      if (res.status === 201) {
        getPlatosAxios().then((res) => {
          setPelatos(res.data.reverse())
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
                  لیست کلاس ها
                </CCol>
                <CCol sm="2" >
                  <CButton onClick={toggle1} block color="light">افزودن</CButton>
                </CCol>

              </CRow >
              <CCollapse show={collapse1}>
                <CCardBody className="justify-content-center">
                  <CForm>
                    <CInputGroup className="mb-3">
                      <CInput value={building} onInput={e => setBuilding(e.target.value)} type="text" placeholder="نام ساختمان" />
                      <CInput value={name} onInput={e => setName(e.target.value)} type="text" placeholder="نام کلاس" />
                      <CInput value={capacity} onInput={e => setCapacity(e.target.value)} type="number" placeholder="ظرفیت کلاس" />
                    </CInputGroup>
                    <CButton onClick={handlePostField} color="success" block>افزودن</CButton>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={platos}
                fields={['نام ساختمان', 'نام کلاس', 'ظرفیت کلاس', 'عملیات',]}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'نام ساختمان':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.building}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'نام کلاس':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.name}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'ظرفیت کلاس':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.capacity}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'عملیات':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CButtonGroup>
                            <CButton onClick={() => { handleDeleteField(item.id) }}
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

export default Platos
