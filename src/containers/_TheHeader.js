import React from 'react'
import { Link } from 'react-router-dom'
import {
    CHeader,
    CHeaderNav,
    CCol,
    CButton
} from '@coreui/react'

const _TheHeader = () => {

    return (
        <CHeader withSubheader>
            <CHeaderNav className="d-md-down-none mr-auto">
                <Link to="/login">

                    <CCol col="2" xl className="mb-3 mb-xl-0">
                        <CButton block variant="outline" color="primary">ورود</CButton>

                    </CCol>
                </Link>
            </CHeaderNav>
        </CHeader>
    )
}

export default _TheHeader
