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
    CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import usersData from '../users/UsersData'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const fields = ['نام طرح', 'کد طرح', 'عملیات',]
const User_panel = () => {
    return (
        <>
            <CCard>
                <CCardHeader>
                    طرح ها
            </CCardHeader>
            </CCard>

            <CDataTable
                items={usersData}
                fields={fields}
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
                                        <CButton block color="success">مشاهده</CButton>
                                    </CCol>
                                </CRow>
                            </td>
                        )

                }}

            />
        </>
    )
}

export default User_panel
