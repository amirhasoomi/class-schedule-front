import React, {
    lazy,
    useState,
    useEffect,
} from 'react'
import {
    CCard,
    CCardHeader,
    CCol,
    CInput,
    CFormGroup,
    CForm,
    CSelect,
    CButton,
    CLabel
} from '@coreui/react'

//Api
import {
    getProfileAxios
} from "../../api/axios";

import { Link, useHistory } from "react-router-dom";


export default function EditProfile() {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getProfileAxios().then((res) => {
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
                    <CInput></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام:</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>نام خانوادگی:</CLabel>
                    <CInput></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>کد ملی:</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>تاریخ تولد:</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>تلفن ثابت:</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>تلفن همراه:</CLabel>
                    <CLabel>{profile.mobile}</CLabel>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4">
                    <CLabel>کشور:</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="4">
                    <CLabel>استان:</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="4">
                    <CLabel>شهر:</CLabel>
                    <CInput></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="12">
                    <CLabel>آدرس:</CLabel>
                    <CInput></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>آخرین مدرک تحصیلی:</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>رشته:</CLabel>
                    <CInput></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>گرایش</CLabel>
                    <CInput></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>تخصص</CLabel>
                    <CInput></CInput>
                </CCol>
            </CFormGroup>
            <Link>
                <CButton color="success" block>ثبت</CButton>
            </Link>
        </>
    )
}

