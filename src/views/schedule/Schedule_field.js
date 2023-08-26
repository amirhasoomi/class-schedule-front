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
  CInputGroup,
  CFormGroup,
  CLabel,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

//Api
import {
  getFieldAxios,
  getScheduleByFieldAxios,
  getPlatosAxios,
  getListLessonAxios,
  getUsersAxios,
  postScheduleAxios,
  deletSscheduleAxios
} from "../../api/axios";

var week = {
  0: "شنبه",
  1: "یک شنبه",
  2: "دو شنبه",
  3: "سه شنبه",
  4: "چهار شنبه",
  5: "پنج شنبه",
  6: "جمعه"
};


const Schedule_field = ({ match }) => {

  const [dow, setDOW] = useState(0)
  const [sth, setSTH] = useState('00')
  const [stm, setSTM] = useState('00')
  const [eth, setETH] = useState('00')
  const [etm, setETM] = useState('00')
  const [plato, setPelato] = useState()
  const [lesson, setLesson] = useState()
  const [user, setUser] = useState()
  const [collapse1, setCollapse1] = useState(false)
  const [field, setField] = useState([])
  const [schedules, setSchedules] = useState([])
  const [platos, setPelatos] = useState([])
  const [lessons, setLessons] = useState([])
  const [users, setUsers] = useState([])

  const plato_options = platos.map((plato_option) => {
    return <option value={plato_option.id}>{plato_option.building + ' کلاس ' + plato_option.name}</option>
  })

  const lesson_options = lessons.map((lesson_option) => {
    return <option value={lesson_option.id}>{lesson_option.name}</option>
  })

  const user_options = users.map((user_option) => {
    return <option value={user_option.user.id}>{user_option.f_name + ' ' + user_option.l_name}</option>
  })

  useEffect(() => {

    getFieldAxios(match.params.id).then((res) => {
      setField(res.data)
    })

    getScheduleByFieldAxios(match.params.id).then((res) => {
      setSchedules(res.data)
    })

    getPlatosAxios().then((res) => {
      setPelatos(res.data)
      setPelato(res.data[0].id)
    });

    getListLessonAxios(match.params.id).then((res) => {
      setLessons(res.data)
      setLesson(res.data[0].id)
    })

    getUsersAxios().then((res) => {
      setUsers(res.data)
      setUser(res.data[0].user.id)
    })
  }, []);

  const toggle1 = (e) => {
    setCollapse1(!collapse1)
    e.preventDefault()
  }


  const handleDeleteSchedule = (id) => {
    deletSscheduleAxios(id).then((res) => {
      if (res.status === 204) {
        getScheduleByFieldAxios(match.params.id).then((res) => {
          setSchedules(res.data)
        });
      }
    });
  };




  const handlePostSchedule = () => {
    postScheduleAxios(
      {
        start_time: sth.toString() + '-' + stm.toString(),
        end_time: eth.toString() + '-' + etm.toString(),
        date_of_week: dow,
        plato: plato,
        lesson: lesson,
        professor: user,
        capacity: 0
      }
    ).then((res) => {
      if (res.status === 201) {
        getScheduleByFieldAxios(match.params.id).then((res) => {
          setSchedules(res.data)
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
                  زمانبندی دروس رشته {field.name} ({field.code})
                </CCol>
                <CCol sm="2" >
                  <CButton onClick={toggle1} block color="light">افزودن</CButton>
                </CCol>

              </CRow >
              <CCollapse show={collapse1}>
                <CCardBody className="justify-content-center">
                  <CRow>
                    <CCol xs="2">
                      <CFormGroup>
                        <CLabel>روز هفته</CLabel>
                        <CSelect value={dow} onChange={(e) => setDOW(e.target.value)}>
                          <option value="0">شنبه</option>
                          <option value="1">یک شنبه</option>
                          <option value="2">دو شنبه</option>
                          <option value="3">سه شنبه</option>
                          <option value="4">چهار شنبه</option>
                          <option value="5">پنج شنبه</option>
                          <option value="6">جمعه</option>
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="2">
                      <CFormGroup>
                        <CLabel>ساعت شروع</CLabel>
                        <CRow>
                          <CCol>
                            <CInputGroup>
                              <CSelect value={stm} onChange={(e) => setSTM(e.target.value)}>
                                <option value="00" >00</option>
                                <option value="01" >01</option>
                                <option value="02" >02</option>
                                <option value="03" >03</option>
                                <option value="04" >04</option>
                                <option value="05" >05</option>
                                <option value="06" >06</option>
                                <option value="07" >07</option>
                                <option value="08" >08</option>
                                <option value="09" >09</option>
                                <option value="10" >10</option>
                                <option value="11" >11</option>
                                <option value="12" >12</option>
                                <option value="13" >13</option>
                                <option value="14" >14</option>
                                <option value="15" >15</option>
                                <option value="16" >16</option>
                                <option value="17" >17</option>
                                <option value="18" >18</option>
                                <option value="19" >19</option>
                                <option value="20" >20</option>
                                <option value="21" >21</option>
                                <option value="22" >22</option>
                                <option value="23" >23</option>
                                <option value="24" >24</option>
                                <option value="25" >25</option>
                                <option value="26" >26</option>
                                <option value="27" >27</option>
                                <option value="28" >28</option>
                                <option value="29" >29</option>
                                <option value="30" >30</option>
                                <option value="31" >31</option>
                                <option value="32" >32</option>
                                <option value="33" >33</option>
                                <option value="34" >34</option>
                                <option value="35" >35</option>
                                <option value="36" >36</option>
                                <option value="37" >37</option>
                                <option value="38" >38</option>
                                <option value="39" >39</option>
                                <option value="40" >40</option>
                                <option value="41" >41</option>
                                <option value="42" >42</option>
                                <option value="43" >43</option>
                                <option value="44" >44</option>
                                <option value="45" >45</option>
                                <option value="46" >46</option>
                                <option value="47" >47</option>
                                <option value="48" >48</option>
                                <option value="49" >49</option>
                                <option value="50" >50</option>
                                <option value="51" >51</option>
                                <option value="52" >52</option>
                                <option value="53" >53</option>
                                <option value="54" >54</option>
                                <option value="55" >55</option>
                                <option value="56" >56</option>
                                <option value="57" >57</option>
                                <option value="58" >58</option>
                                <option value="59" >59</option>
                              </CSelect>
                              <CSelect value={sth} onChange={(e) => setSTH(e.target.value)}>
                                <option value="00" >00</option>
                                <option value="01" >01</option>
                                <option value="02" >02</option>
                                <option value="03" >03</option>
                                <option value="04" >04</option>
                                <option value="05" >05</option>
                                <option value="06" >06</option>
                                <option value="07" >07</option>
                                <option value="08" >08</option>
                                <option value="09" >09</option>
                                <option value="10" >10</option>
                                <option value="11" >11</option>
                                <option value="12" >12</option>
                                <option value="13" >13</option>
                                <option value="14" >14</option>
                                <option value="15" >15</option>
                                <option value="16" >16</option>
                                <option value="17" >17</option>
                                <option value="18" >18</option>
                                <option value="19" >19</option>
                                <option value="20" >20</option>
                                <option value="21" >21</option>
                                <option value="22" >22</option>
                                <option value="23" >23</option>
                              </CSelect>
                            </CInputGroup>
                          </CCol>
                        </CRow>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="2">
                      <CFormGroup>
                        <CLabel>ساعت پایان</CLabel>
                        <CRow>
                          <CCol>
                            <CInputGroup>
                              <CSelect value={etm} onChange={(e) => setETM(e.target.value)}>
                                <option value="00" >00</option>
                                <option value="01" >01</option>
                                <option value="02" >02</option>
                                <option value="03" >03</option>
                                <option value="04" >04</option>
                                <option value="05" >05</option>
                                <option value="06" >06</option>
                                <option value="07" >07</option>
                                <option value="08" >08</option>
                                <option value="09" >09</option>
                                <option value="10" >10</option>
                                <option value="11" >11</option>
                                <option value="12" >12</option>
                                <option value="13" >13</option>
                                <option value="14" >14</option>
                                <option value="15" >15</option>
                                <option value="16" >16</option>
                                <option value="17" >17</option>
                                <option value="18" >18</option>
                                <option value="19" >19</option>
                                <option value="20" >20</option>
                                <option value="21" >21</option>
                                <option value="22" >22</option>
                                <option value="23" >23</option>
                                <option value="24" >24</option>
                                <option value="25" >25</option>
                                <option value="26" >26</option>
                                <option value="27" >27</option>
                                <option value="28" >28</option>
                                <option value="29" >29</option>
                                <option value="30" >30</option>
                                <option value="31" >31</option>
                                <option value="32" >32</option>
                                <option value="33" >33</option>
                                <option value="34" >34</option>
                                <option value="35" >35</option>
                                <option value="36" >36</option>
                                <option value="37" >37</option>
                                <option value="38" >38</option>
                                <option value="39" >39</option>
                                <option value="40" >40</option>
                                <option value="41" >41</option>
                                <option value="42" >42</option>
                                <option value="43" >43</option>
                                <option value="44" >44</option>
                                <option value="45" >45</option>
                                <option value="46" >46</option>
                                <option value="47" >47</option>
                                <option value="48" >48</option>
                                <option value="49" >49</option>
                                <option value="50" >50</option>
                                <option value="51" >51</option>
                                <option value="52" >52</option>
                                <option value="53" >53</option>
                                <option value="54" >54</option>
                                <option value="55" >55</option>
                                <option value="56" >56</option>
                                <option value="57" >57</option>
                                <option value="58" >58</option>
                                <option value="59" >59</option>
                              </CSelect>
                              <CSelect value={eth} onChange={(e) => setETH(e.target.value)}>
                                <option value="00" >00</option>
                                <option value="01" >01</option>
                                <option value="02" >02</option>
                                <option value="03" >03</option>
                                <option value="04" >04</option>
                                <option value="05" >05</option>
                                <option value="06" >06</option>
                                <option value="07" >07</option>
                                <option value="08" >08</option>
                                <option value="09" >09</option>
                                <option value="10" >10</option>
                                <option value="11" >11</option>
                                <option value="12" >12</option>
                                <option value="13" >13</option>
                                <option value="14" >14</option>
                                <option value="15" >15</option>
                                <option value="16" >16</option>
                                <option value="17" >17</option>
                                <option value="18" >18</option>
                                <option value="19" >19</option>
                                <option value="20" >20</option>
                                <option value="21" >21</option>
                                <option value="22" >22</option>
                                <option value="23" >23</option>
                              </CSelect>
                            </CInputGroup>
                          </CCol>
                        </CRow>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="2">
                      <CFormGroup>
                        <CLabel>محل برگزاری</CLabel>
                        <CSelect value={plato} onChange={(e) => setPelato(e.target.value)}>
                          {plato_options}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="2">
                      <CFormGroup>
                        <CLabel>درس</CLabel>
                        <CSelect value={lesson} onChange={(e) => setLesson(e.target.value)}>
                          {lesson_options}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="2">
                      <CFormGroup>
                        <CLabel>مدرس</CLabel>
                        <CSelect value={user} onChange={(e) => setUser(e.target.value)}>
                          {user_options}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <CButton onClick={handlePostSchedule} color="success" block>افزودن</CButton>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCollapse>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={schedules}
                fields={['روز هفته', 'ساعت شروع', 'ساعت اتمام', 'محل برگزاری', 'درس', 'مدرس', 'مشاهده کلی',]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'روز هفته':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {week[item.date_of_week]}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'ساعت شروع':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.start_time}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'ساعت اتمام':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.end_time}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'محل برگزاری':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.plato.building}، کلاس {item.plato.name}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'درس':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.lesson.name}({item.lesson.code})
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'مدرس':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CCol col="4" xl className="mb-3 mb-xl-0">
                            {item.professor.f_name} {item.professor.l_name}
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  'مشاهده کلی':
                    (item) => (
                      <td>
                        <CRow className="align-items-center">
                          <CButton onClick={() => { handleDeleteSchedule(item.id) }}
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

export default Schedule_field
