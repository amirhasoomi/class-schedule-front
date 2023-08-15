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
    CLabel
} from '@coreui/react'

//Api
import {
    getMyProfileAxios
} from "../../api/axios";

import { Link } from "react-router-dom";


export default function Profile() {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getMyProfileAxios().then((res) => {
            setProfile(res.data)
            console.log(res.data)
        });
        return () => {
        };
    }, []);


    return (
        <>
            <CCard>
                <CCardHeader>
                    پروفایل
        </CCardHeader>
            </CCard>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام کاربری:</CLabel>
                    <CLabel>{profile.username}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>ایمیل:</CLabel>
                    <CLabel>{profile.email}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام:</CLabel>
                    <CLabel>{profile.f_name}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>نام خانوادگی:</CLabel>
                    <CLabel>{profile.l_name}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>کد ملی:</CLabel>
                    <CLabel>{profile.national_id}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>تاریخ تولد:</CLabel>
                    <CLabel>{profile.birthday}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>تلفن ثابت:</CLabel>
                    <CLabel>{profile.phone}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>تلفن همراه:</CLabel>
                    <CLabel>{profile.mobile}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4">
                    <CLabel>کشور:</CLabel>
                    <CLabel>{profile.Country}</CLabel>
                </CCol>
                <CCol sm="4">
                    <CLabel>استان:</CLabel>
                    <CLabel>{profile.state}</CLabel>
                </CCol>
                <CCol sm="4">
                    <CLabel>شهر:</CLabel>
                    <CLabel>{profile.city}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="12">
                    <CLabel>آدرس:</CLabel>
                    <CLabel>{profile.address}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>آخرین مدرک تحصیلی:</CLabel>
                    <CLabel>{profile.ldc}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>رشته:</CLabel>
                    <CLabel>{profile.major}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>گرایش</CLabel>
                    <CLabel>{profile.orientation}</CLabel>
                </CCol>
                <CCol sm="6">
                    <CLabel>تخصص</CLabel>
                    <CLabel>{profile.specialty}</CLabel>
                </CCol>
            </CFormGroup>
            <Link to="/editprofile">
                <CButton type="submit" color="warning" block>ویرایش</CButton>
            </Link>
        </>
    )
}

