import React, {
    useState,
    useEffect,
} from 'react'
import {
    CButton,
    CCard,
    CCardHeader,
    CCol,
    CRow,
    CDataTable,
    CBadge,
    CCollapse,
    CCardBody,
    CForm,
    CInputGroup,
    CInput
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

//Api
import {
    getUsersAxios,
    RegisterAxios,
    getScheduleAxios
} from "../../api/axios";

import { Link, useHistory } from "react-router-dom";

var week = {
    0: "شنبه",
    1: "یک شنبه",
    2: "دو شنبه",
    3: "سه شنبه",
    4: "چهار شنبه",
    5: "پنج شنبه",
    6: "جمعه"
};

export default function Panel() {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [collapse, setCollapse] = useState(false)
    const [mobile, setMobile] = useState('');
    const [pass, setPass] = useState('');
    const [schedules, setSchedules] = useState([])

    const toggle = (e) => {
        setCollapse(!collapse)
        e.preventDefault()
    }

    const handleRegister = () => {
        RegisterAxios({ mobile, password: pass }).then((res) => {
            if (res.status === 201) {
                setCollapse(!collapse)
                getUsersAxios().then((res) => {
                    setUsers(res.data.reverse())
                });
            }
        });
    };


    useEffect(() => {
        getUsersAxios().then((res) => {
            setUsers(res.data.reverse())
        });


        getScheduleAxios().then((res) => {
            setSchedules(res.data.reverse())
        })

        return () => {
        };

    }, []);

    if (localStorage.getItem('user_type') === '1') {
        return (
            <>
                <CCard>
                    <CCardHeader>
                        <CRow className="align-items-center">
                            <CCol sm="10" >
                                کاربران سیستم
                            </CCol>
                            <CCol sm="2" >
                                <CButton onClick={toggle} block color="light">افزودن کاربر</CButton>
                            </CCol>
                        </CRow >
                        <CCollapse show={collapse}>
                            <CCardBody className="justify-content-center">
                                <CForm>
                                    <CInputGroup className="mb-3">
                                        <CInput value={mobile} onInput={e => setMobile(e.target.value)} type="text" placeholder="نام کاربری (تلفن همراه)" autoComplete="username" />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CInput value={pass} onInput={e => setPass(e.target.value)} type="password" placeholder="رمز ورود" autoComplete="new-password" />
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                        <CInput type="password" placeholder="تکرار رمز" autoComplete="new-password" />
                                    </CInputGroup>
                                    <CButton onClick={handleRegister} color="success" block>افزودن</CButton>
                                </CForm>
                            </CCardBody>
                        </CCollapse>
                    </CCardHeader >
                </CCard >

                <CDataTable
                    items={users}
                    fields={['نام', 'نام خانوادگی', 'نام کاربری (تلفن همراه)', 'نقش', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    pagination
                    scopedSlots={{
                        'نقش':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        {
                                            item.user.user_type === 1 ? <CBadge color='success'>مدیر</CBadge>
                                                : item.user.user_type === 2 ? <CBadge color='warning'>استاد</CBadge>
                                                    : <CBadge color='secondary'>نامعلوم</CBadge>
                                        }
                                    </CRow>
                                </td>
                            ),
                        'نام':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.f_name}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام خانوادگی':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.l_name}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام کاربری (تلفن همراه)':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.mobile}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="2" xl className="mb-3 mb-xl-0">
                                            <CButton
                                                onClick={() => { history.push(`/profile/${item.user.id}`) }}
                                                size="sm" color="secondary"><CIcon name="cil-settings" /></CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                    }}

                />

            </>
        )
    }
    else if (localStorage.getItem('user_type') === '2') {
        return (
            <>

                <CRow>
                    <CCol xs="12" lg="12">
                        <CCard>
                            <CCardHeader>
                                <CRow className="align-items-center">
                                    <CCol sm="10" >
                                        کلاس های من
                                    </CCol>
                                </CRow >
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={schedules}
                                    fields={['روز هفته', 'ساعت شروع', 'ساعت اتمام', 'محل برگزاری', 'درس', 'مدرس',]}
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
                                            )
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

            </>
        )
    }
    else {
        localStorage.clear();
        history.push(`/`)
    }

}


