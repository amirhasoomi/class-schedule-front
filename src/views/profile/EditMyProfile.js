import React, {
    useState,
    useEffect,
} from 'react'
import {
    CCard,
    CCardHeader,
    CCol,
    CInput,
    CFormGroup,
    CButton,
    CLabel,
    CRow
} from '@coreui/react'

//Api
import {
    getMyProfileAxios,
    patchProfileAxios
} from "../../api/axios";


export default function EditProfile() {

    const [profile, setProfile] = useState([]);
    const [email, setEmail] = useState('')
    const [f_name, setF_name] = useState('')
    const [l_name, setL_name] = useState('')
    const [national_id, setNational_id] = useState('')
    const [birthday, setBirthday] = useState('')
    const [major, setMajor] = useState('')
    const [orientation, setOrientation] = useState('')

    useEffect(() => {
        getMyProfileAxios().then((res) => {
            setProfile(res.data)
        });
        return () => {
        };
    }, []);

    const handleEdit = () => {
        patchProfileAxios(profile.user.id, {
            email: email,
            f_name: f_name,
            l_name: l_name,
            national_id: national_id,
            birthday: birthday,
            major: major,
            orientation: orientation
        }).then((res) => {
            console.log(res)
        })
    };

    return (
        <>
            <CCard>
                <CCardHeader>
                    <CRow className="align-items-center">
                        <CCol sm="10" >
                            ویرایش پروفایل کاربر
                        </CCol>
                        <CCol sm="2" >
                            <CButton
                                onClick={handleEdit}
                                block color="success">ثبت</CButton>

                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام کاربری (تلفن همراه):</CLabel>
                    <CInput className="form-control-warning" value={profile.mobile} disabled></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>ایمیل:</CLabel>
                    <CInput onInput={e => setEmail(e.target.value)} defaultValue={profile.email}></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>نام:</CLabel>
                    <CInput onInput={e => setF_name(e.target.value)} defaultValue={profile.f_name}></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>نام خانوادگی:</CLabel>
                    <CInput onInput={e => setL_name(e.target.value)} defaultValue={profile.l_name}></CInput>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>کد ملی:</CLabel>
                    <CInput onInput={e => setNational_id(e.target.value)} defaultValue={profile.national_id}></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>تاریخ تولد:</CLabel>
                    <CInput onInput={e => setBirthday(e.target.value)} defaultValue={profile.birthday} type="date" id="date-input" name="date-input" placeholder="date" />
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="6">
                    <CLabel>رشته:</CLabel>
                    <CInput onInput={e => setMajor(e.target.value)} defaultValue={profile.major}></CInput>
                </CCol>
                <CCol sm="6">
                    <CLabel>گرایش</CLabel>
                    <CInput onInput={e => setOrientation(e.target.value)} defaultValue={profile.orientation}></CInput>
                </CCol>
            </CFormGroup>
        </>
    )
}

