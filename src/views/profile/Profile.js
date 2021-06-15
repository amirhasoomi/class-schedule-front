import React, { lazy } from 'react'
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

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const profile = () => {
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
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="6">
                        <CLabel>ایمیل:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CLabel>نام:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="6">
                        <CLabel>نام خانوادگی:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CLabel>کد ملی:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="6">
                        <CLabel>تاریخ تولد:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CLabel>تلفن ثابت:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="6">
                        <CLabel>تلفن همراه:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="4">
                        <CLabel>کشور:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="4">
                        <CLabel>استان:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="4">
                        <CLabel>شهر:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="12">
                        <CLabel>آدرس:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CLabel>آخرین مدرک تحصیلی:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="6">
                        <CLabel>رشته:</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CLabel>گرایش</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                    <CCol sm="6">
                        <CLabel>تخصص</CLabel>
                        <CLabel>نام کاربری</CLabel>
                    </CCol>
                </CFormGroup>
            <CButton type="submit" color="warning" block>ویرایش</CButton>
        </>
    )
}

export default profile
