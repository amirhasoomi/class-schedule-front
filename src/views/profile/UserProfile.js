import React, {
    useState,
    useEffect,
} from 'react'
import {
    CCard,
    CCardHeader,
    CCol,
    CFormGroup,
    CButton,
    CLabel,
    CRow
} from '@coreui/react'
import { useHistory } from "react-router-dom";
//Api
import {
    getUserProfileAxios
} from "../../api/axios";


const UserProfile = ({ match }) => {

    const history = useHistory();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        getUserProfileAxios(match.params.id).then((res) => {
            console.log(res.data)
            setProfile(res.data)
        })
        return () => {
        };
    }, []);
    return (
        <>
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol sm="10" >
                            پروفایل کاربر
                        </CCol>
                        <CCol sm="2" >
                            <CButton
                                onClick={() => { history.push(`/editprofile/${profile.user.id}`) }}
                                block color="warning">ویرایش</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام کاربری (تلفن همراه): </CLabel>
                    <CLabel>{profile.mobile}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>ایمیل: </CLabel>
                    <CLabel>{profile.email}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام: </CLabel>
                    <CLabel>{profile.f_name}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>نام خانوادگی: </CLabel>
                    <CLabel>{profile.l_name}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>کد ملی: </CLabel>
                    <CLabel>{profile.national_id}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>تاریخ تولد: </CLabel>
                    <CLabel>{profile.birthday}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>رشته: </CLabel>
                    <CLabel>{profile.major}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>گرایش: </CLabel>
                    <CLabel>{profile.orientation}</CLabel>
                </CCol>
            </CFormGroup>
        </>
    )
}

export default UserProfile
