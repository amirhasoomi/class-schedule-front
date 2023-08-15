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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

//Api
import {
  deleteLessonAxios,
  postLessonAxios,
  getFieldAxios,
  getListLessonAxios
} from "../../api/axios";



const Lessons = ({ match }) => {

  const [collapse1, setCollapse1] = useState(false)
  const [field, setField] = useState([])
  const [lessons, setLessons] = useState([])
  const [Code, setCode] = useState('')
  const [Name, setName] = useState('')
  const [Theory, setTheory] = useState()
  const [Practical, setPractical] = useState()

  useEffect(() => {
    getFieldAxios(match.params.id).then((res) => {
      setField(res.data)
    })

    getListLessonAxios(match.params.id).then((res) => {
      setLessons(res.data)
    })
  }, []);

  const toggle1 = (e) => {
    setCollapse1(!collapse1)
    e.preventDefault()
  }


  const handleDeleteLesson = (id) => {
    deleteLessonAxios(id).then((res) => {
      if (res.status === 204) {
        getListLessonAxios(match.params.id).then((res) => {
          setLessons(res.data)
        });
      }
    });
  };

  const handlePostField = () => {
    postLessonAxios(
      {
        name: Name,
        code: Code,
        field: match.params.id,
        theory_course: Theory,
        practical_course: Practical
      }
    ).then((res) => {
      if (res.status === 201) {
        getListLessonAxios(match.params.id).then((res) => {
          setLessons(res.data)
          setCollapse1(!collapse1)
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
                  دروس رشته {field.name} ({field.code})
                </CCol>
                <CCol sm="2" >
                  <CButton onClick={toggle1} block color="light">افزودن</CButton>
                </CCol>

              </CRow >
              <CCollapse show={collapse1}>
                <CCardBody className="justify-content-center">
                  <CForm>
                    <CInputGroup className="mb-3">
                      <CInput value={Code} onInput={e => setCode(e.target.value)} type="text" placeholder="کد درس" />
                      <CInput value={Name} onInput={e => setName(e.target.value)} type="text" placeholder="نام درس" />
                      <CInput value={Theory} onInput={e => setTheory(e.target.value)} type="number" placeholder="تعداد واحد نظری" />
                      <CInput value={Practical} onInput={e => setPractical(e.target.value)} type="number" placeholder="تعداد واحد عملی" />
                    </CInputGroup>
                    <CButton onClick={handlePostField} color="success" block>افزودن</CButton>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={lessons}
                fields={['کد درس', 'نام درس', 'تعداد واحد کل', 'تعداد واحد نظری', 'تعداد واحد عملی', 'عملیات',]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'کد درس':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.code}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'نام درس':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.name}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'تعداد واحد کل':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.practical_course + item.theory_course}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'تعداد واحد نظری':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.theory_course}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'تعداد واحد عملی':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.practical_course}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'عملیات':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CButton onClick={() => { handleDeleteLesson(item.id) }}
                            color="danger"><CIcon name="cil-trash" /></CButton>
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

export default Lessons
