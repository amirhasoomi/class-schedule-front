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

const create_profile = () => {
    return (
        <>
            <CCard>
                <CCardHeader>
                    ایجاد پروفایل
        </CCardHeader>
            </CCard>
            <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                    <CCol sm="6">
                        <CInput placeholder="نام کاربری" />
                    </CCol>
                    <CCol sm="6">
                        <CInput placeholder="ایمیل" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CInput placeholder="نام" />
                    </CCol>
                    <CCol sm="6">
                        <CInput placeholder="نام خانوادگی" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CInput placeholder="کد ملی" />
                    </CCol>
                    <CCol sm="6">
                        <CInput type="date" id="date-input" name="date-input" placeholder="تاریخ تولد" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CInput placeholder="تلفن ثابت" />
                    </CCol>
                    <CCol sm="6">
                        <CInput placeholder="تلفن همراه" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="4">
                        <CInput placeholder="کشور" />
                    </CCol>
                    <CCol sm="4">
                        <CInput placeholder="استان" />
                    </CCol>
                    <CCol sm="4">
                        <CInput placeholder="شهر" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="12">
                        <CInput placeholder="آدرس" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CSelect custom name="select" id="select">
                            <option>آخرین مدرک تحصیلی</option>
                            <option value="1">زیر دیپلم</option>
                            <option value="2">دیپلم</option>
                            <option value="4">کاردانی</option>
                            <option value="5">کارشناسی</option>
                            <option value="6">کارشناسی ارشد</option>
                            <option value="6">دکتری و بالاتر</option>
                        </CSelect>
                    </CCol>
                    <CCol sm="6">
                        <CInput placeholder="رشته تحصیلی" />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="6">
                        <CInput placeholder="گرایش" />
                    </CCol>
                    <CCol sm="6">
                        <CInput placeholder="تخصص" />
                    </CCol>
                </CFormGroup>
            </CForm>
            <CButton type="submit" color="primary" block>ثبت</CButton>
        </>
    )
}

export default create_profile
