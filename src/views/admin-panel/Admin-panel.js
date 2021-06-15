import React, { lazy } from 'react'
import {
    CBadge,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CCallout,
    CDataTable,
    CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import usersData from '../users/UsersData'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const Admin_panel = () => {
    return (
        <>
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            اسلاید ها
                    </CCol>
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            <CButton block color="success">افزودن</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['نام اسلاید', 'متن اسلاید', 'عملیات',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'عملیات':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">
                                    {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="success">مشاهده</CButton>
                                    </CCol> */}
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="warning">ویرایش</CButton>
                                    </CCol>
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="danger">حذف</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            بنر ها
                    </CCol>
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            <CButton block color="success">افزودن</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['نام بنر', 'متن بنر', 'عملیات',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'عملیات':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">
                                    {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="success">مشاهده</CButton>
                                    </CCol> */}
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="warning">ویرایش</CButton>
                                    </CCol>
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="danger">حذف</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            همکاران
                    </CCol>
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            <CButton block color="success">افزودن</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['نام همکار', 'عملیات',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'عملیات':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">
                                    {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="success">مشاهده</CButton>
                                    </CCol> */}
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="warning">ویرایش</CButton>
                                    </CCol>
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="danger">حذف</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            حامیان
                    </CCol>
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            <CButton block color="success">افزودن</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['نام حامی', 'عملیات',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'عملیات':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">
                                    {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="success">مشاهده</CButton>
                                    </CCol> */}
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="warning">ویرایش</CButton>
                                    </CCol>
                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="danger">حذف</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            پبام ها
                    </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['موضوع', 'متن', 'عملیات',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'عملیات':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">

                                    <CCol col="4" xl className="mb-3 mb-xl-0">
                                        <CButton block color="danger">حذف</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            طرح ها
                    </CCol>
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            <CButton block color="success">افزودن</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['نام طرح', 'کد طرح', 'عملیات',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'عملیات':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">
                                    <CCol col="2" xl className="mb-3 mb-xl-0">
                                        <CButton block color="success">مشاهده</CButton>
                                    </CCol>
                                    <CCol col="2" xl className="mb-3 mb-xl-0">
                                        <CButton block color="warning">ویرایش</CButton>
                                    </CCol>
                                    <CCol col="2" xl className="mb-3 mb-xl-0">
                                        <CButton block color="danger">حذف</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />

            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            اعضا
                    </CCol>
                        <CCol col="6" xl className="mb-3 mb-xl-0">
                            <CButton block color="success">افزودن</CButton>
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={['نام', 'نام خانوادگی', 'نقش',]}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                    'نقش':
                        (item) => (
                            <td>
                                <CRow className="align-items-center">
                                    <CSelect custom name="select" id="select">
                                        <option value="1">مدیر</option>
                                        <option value="2">کاربر</option>
                                        <option value="4">داور</option>
                                    </CSelect>
                                </CRow>
                            </td>
                        )

                }}

            />
        </>
    )
}

export default Admin_panel
