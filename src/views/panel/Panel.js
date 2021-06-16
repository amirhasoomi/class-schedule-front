import React, {
    lazy,
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
    CSelect,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CTextarea,
    CInput,
    CInputFile

} from '@coreui/react'

//Api
import {
    getSliderAxios,
    deleteSlideAxios,
    putSlideAxios,
    postSlideAxios
} from "../../api/axios";

import usersData from '../users/UsersData'
import { useHistory } from "react-router-dom";

export default function Panel() {
    const history = useHistory();
    const [slider, setSlider] = useState([]);
    const [cslide, setCslide] = useState(false)
    const [pslide, setPslide] = useState(false)
    const [slideTitle, setSlideTitle] = useState('');
    const [slideText, setSlideText] = useState('');
    const [slideImg, setSlideImg] = useState('');
    const postslide = () => {
        postSlideAxios({ title: slideTitle, text: slideText, image: slideImg }).then((res) => {
            console.log(res)
        })
    }
    const putslide = (id) => {
        putSlideAxios(id, { title: slideTitle, text: slideText, image: slideImg }).then((res) => {
            console.log(res)
        })
    }





    useEffect(() => {
        getSliderAxios().then((res) => {
            setSlider(res.data)
            console.log(res.data)
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
                            <CCol col="6" xl className="mb-3 mb-xl-0">
                                اسلاید ها
                        </CCol>
                            <CCol col="6" xl className="mb-3 mb-xl-0">
                                <CButton block color="success" onClick={() => setCslide(!cslide)}>افزودن</CButton>
                            </CCol>
                        </CRow>
                        <CModal
                            show={cslide}
                            onClose={() => setCslide(!cslide)}
                            color="success"
                        >
                            <CModalHeader closeButton>
                                <CModalTitle>افزودن اسلاید</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CInput value={slideTitle} onInput={e => setSlideTitle(e.target.value)} placeholder="نام اسلاید" />
                                <CTextarea
                                    rows="9"
                                    placeholder="متن اسلاید..."
                                    value={slideText} onInput={e => setSlideText(e.target.value)}
                                />
                                <CInputFile file={slideImg} onInput={e => setSlideImg(e.target.file)} />
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="success" onClick={() => setCslide(!cslide), postslide}>افزودن</CButton>{' '}
                                <CButton color="secondary" onClick={() => setCslide(!cslide)}>لغو</CButton>
                            </CModalFooter>
                        </CModal>
                    </CCardHeader>
                </CCard>
                <CDataTable
                    items={slider}
                    fields={['نام اسلاید', 'متن اسلاید', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    pagination
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => setPslide(!pslide)} block color="warning">ویرایش</CButton>
                                            {/* <CModal
                                                show={pslide}
                                                onClose={() => setPslide(!pslide)}
                                                color="warning"
                                            >
                                                <CModalHeader closeButton>
                                                    <CModalTitle>ویرایش اسلاید</CModalTitle>
                                                </CModalHeader>
                                                <CModalBody>
                                                    <CInput value={slideTitle} onInput={e => setSlideTitle(e.target.value)} placeholder="نام اسلاید" />
                                                    <CTextarea
                                                        rows="9"
                                                        placeholder="متن اسلاید..."
                                                        value={slideText} onInput={e => setSlideText(e.target.value)}
                                                    />
                                                    <CInputFile value={slideImg} onInput={e => setSlideImg(e.target.value)} />
                                                </CModalBody>
                                                <CModalFooter>
                                                    <CButton color="warning" onClick={() => setPslide(!pslide), putslide(item.id)}>ویرایش</CButton>
                                                    <CButton color="secondary" onClick={() => setPslide(!pslide)}>لغو</CButton>
                                                </CModalFooter>
                                            </CModal> */}
                                        </CCol>
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deleteSlideAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>


                                    </CRow>

                                </td>
                            ),
                        'نام اسلاید':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.title}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'متن اسلاید':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.text}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),

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
    else if (localStorage.getItem('user_type') === '2') {
        return (
            <>
                <CButton color="primary" size="lg" block>طرح جدید</CButton>
                <CCard>
                    <CCardHeader>
                        طرح های من
                </CCardHeader>
                </CCard>

                <CDataTable
                    items={usersData}
                    fields={['نام طرح', 'کد طرح', 'عملیات',]}
                    hover
                    striped
                    bordered
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton block color="success">مشاهده</CButton>
                                        </CCol>
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
            </>
        )
    }
    else if (localStorage.getItem('user_type') === '3') {
        return (
            <>
                <CCard>
                    <CCardHeader>
                        طرح ها
                </CCardHeader>
                </CCard>

                <CDataTable
                    items={usersData}
                    fields={['نام طرح', 'کد طرح', 'عملیات',]}
                    hover
                    striped
                    bordered
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
    else {
        localStorage.clear();
        history.push(`/`)
    }

}


