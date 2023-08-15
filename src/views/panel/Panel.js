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
    RegisterAxios
} from "../../api/axios";

import { Link, useHistory } from "react-router-dom";

export default function Panel() {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [collapse, setCollapse] = useState(false)
    const [mobile, setMobile] = useState('');
    const [pass, setPass] = useState('');

    const toggle = (e) => {
        setCollapse(!collapse)
        e.preventDefault()
    }

    const handleRegister = () => {
        RegisterAxios({ mobile, password: pass }).then((res) => {
            if (res.status === 201) {
                setCollapse(!collapse)
                getUsersAxios().then((res) => {
                    setUsers(res.data)
                });
            }
        });
    };


    useEffect(() => {
        getUsersAxios().then((res) => {
            setUsers(res.data)
        });
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
                    items={users.reverse()}
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
                                                    : <CBadge color='secondary'>نامعلوم</CBadge>}
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
                <Link to='/profile'><CButton color="secondary" size="lg" block>پروفایل من</CButton></Link>

                <CCard>
                    <CCardHeader>
                        کلاس های من
                    </CCardHeader>
                </CCard>

                {/* <CDataTable
                    items={proposal}
                    fields={['نام طرح', 'کد طرح', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="2" xl className="mb-3 mb-xl-0">
                                            <CButton block color="success">مشاهده</CButton>
                                        </CCol>
                                        <CCol col="2" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deleteProposalAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام طرح':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.title}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'کد طرح':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.unique_code}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                    }}
                /> */}
            </>
        )
    }
    else {
        localStorage.clear();
        history.push(`/`)
    }

}


