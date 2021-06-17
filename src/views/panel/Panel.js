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
    // putSlideAxios,
    postSlideAxios,
    getBannerAxios,
    deleteBannerAxios,
    postBannerAxios,
    getPartnersAxios,
    deletePartnerAxios,
    postPartnerAxios,
    getSupportsAxios,
    deleteSupportsAxios,
    postSupportsAxios,
    getmessageAxios,
    deleteMessageAxios,
    getProposalAxios,
    deleteProposalAxios,
} from "../../api/axios";

import usersData from '../users/UsersData'
import { useHistory } from "react-router-dom";

export default function Panel() {
    const history = useHistory();
    const [slider, setSlider] = useState([]);
    const [banner, setBanner] = useState([]);
    const [partner, setPartner] = useState([]);
    const [support, setSupport] = useState([]);
    const [message, setMessage] = useState([]);
    const [proposal, setProposal] = useState([]);
    const [cslide, setCslide] = useState(false)
    // const [pslide, setPslide] = useState(false)
    const [cbanner, setCbanner] = useState(false)
    const [cpartner, setCpartner] = useState(false)
    const [csupport, setCsupport] = useState(false)
    const [slideTitle, setSlideTitle] = useState('');
    const [slideText, setSlideText] = useState('');
    const [slideImg, setSlideImg] = useState('');
    const [bannerTitle, setBannerTitle] = useState('');
    const [bannerText, setBannerText] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [partnerLogo, setPartnerLogo] = useState('');
    const [supportName, setSupportName] = useState('');
    const [supportLink, setSupportLink] = useState('');
    const postslide = () => {
        postSlideAxios({ title: slideTitle, text: slideText, image: slideImg }).then((res) => {
            console.log(res)
        })
    }
    // const putslide = (id) => {
    //     putSlideAxios(id, { title: slideTitle, text: slideText, image: slideImg }).then((res) => {
    //         console.log(res)
    //     })
    // }
    const postBanner = () => {
        postBannerAxios({ title: bannerTitle, text: bannerText }).then((res) => {
            console.log(res)
        })
    }
    const postPartner = () => {
        postPartnerAxios({ name: partnerName, logo: partnerLogo }).then((res) => {
            console.log(res)
        })
    }
    const postSupport = () => {
        postSupportsAxios({ name: supportName, link: supportLink }).then((res) => {
            console.log(res)
        })
    }



    useEffect(() => {
        getSliderAxios().then((res) => {
            setSlider(res.data)
            console.log(res.data)
        });
        getBannerAxios().then((res) => {
            setBanner(res.data)
            console.log(res.data)
        });
        getPartnersAxios().then((res) => {
            setPartner(res.data)
            console.log(res.data)
        });
        getSupportsAxios().then((res) => {
            setSupport(res.data)
            console.log(res.data)
        });
        getmessageAxios().then((res) => {
            setMessage(res.data)
            console.log(res.data)
        });
        getProposalAxios().then((res) => {
            setProposal(res.data)
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
                                        {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => setPslide(!pslide)} block color="warning">ویرایش</CButton>
                                            <CModal
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
                                            </CModal>
                                        </CCol> */}
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
                                <CButton block color="success" onClick={() => setCbanner(!cbanner)}>افزودن</CButton>
                            </CCol>
                            <CModal
                                show={cbanner}
                                onClose={() => setCbanner(!cbanner)}
                                color="success"
                            >
                                <CModalHeader closeButton>
                                    <CModalTitle>افزودن بنر</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    <CInput value={bannerTitle} onInput={e => setBannerTitle(e.target.value)} placeholder="نام بنر" />
                                    <CTextarea
                                        rows="9"
                                        placeholder="متن بنر..."
                                        value={bannerText} onInput={e => setBannerText(e.target.value)}
                                    />
                                </CModalBody>
                                <CModalFooter>
                                    <CButton color="success" onClick={() => setCbanner(!cbanner), postBanner}>افزودن</CButton>
                                    <CButton color="secondary" onClick={() => setCbanner(!cbanner)}>لغو</CButton>
                                </CModalFooter>
                            </CModal>
                        </CRow>
                    </CCardHeader>
                </CCard>

                <CDataTable
                    items={banner}
                    fields={['نام بنر', 'متن بنر', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    bordered
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">

                                        {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton block color="warning">ویرایش</CButton>
                                        </CCol> */}
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deleteBannerAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام بنر':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.title}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'متن بنر':
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
                                همکاران
                        </CCol>
                            <CCol col="6" xl className="mb-3 mb-xl-0">
                                <CButton block color="success" onClick={() => setCpartner(!cpartner)}>افزودن</CButton>
                            </CCol>
                            <CModal
                                show={cpartner}
                                onClose={() => setCpartner(!cpartner)}
                                color="success"
                            >
                                <CModalHeader closeButton>
                                    <CModalTitle>افزودن همکار</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    <CInput value={partnerName} onInput={e => setPartnerName(e.target.value)} placeholder="نام همکار" />
                                    <CInputFile value={partnerLogo} onInput={e => setPartnerLogo(e.target.value)} />
                                </CModalBody>
                                <CModalFooter>
                                    <CButton color="success" onClick={() => setCpartner(!cpartner), postPartner}>افزودن</CButton>
                                    <CButton color="secondary" onClick={() => setCpartner(!cpartner)}>لغو</CButton>
                                </CModalFooter>
                            </CModal>
                        </CRow>
                    </CCardHeader>
                </CCard>

                <CDataTable
                    items={partner}
                    fields={['نام همکار', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    bordered
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">

                                        {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton block color="warning">ویرایش</CButton>
                                        </CCol> */}
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deletePartnerAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام همکار':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.name}
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
                                حامیان
                        </CCol>
                            <CCol col="6" xl className="mb-3 mb-xl-0">
                                <CButton block color="success" onClick={() => setCsupport(!csupport)}>افزودن</CButton>
                            </CCol>
                            <CModal
                                show={csupport}
                                onClose={() => setCsupport(!csupport)}
                                color="success"
                            >
                                <CModalHeader closeButton>
                                    <CModalTitle>افزودن حامی</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    <CInput value={supportName} onInput={e => setSupportName(e.target.value)} placeholder="نام حامی" />
                                    <CInput value={supportLink} onInput={e => setSupportLink(e.target.value)} placeholder="لینک حامی" />
                                </CModalBody>
                                <CModalFooter>
                                    <CButton color="success" onClick={() => setCsupport(!csupport), postSupport}>افزودن</CButton>
                                    <CButton color="secondary" onClick={() => setCsupport(!csupport)}>لغو</CButton>
                                </CModalFooter>
                            </CModal>
                        </CRow>
                    </CCardHeader>
                </CCard>

                <CDataTable
                    items={support}
                    fields={['نام حامی', 'لینک حامی', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    bordered
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        {/* <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton block color="warning">ویرایش</CButton>
                                        </CCol> */}
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deleteSupportsAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام حامی':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.name}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'لینک حامی':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.link}
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
                                پبام ها
                        </CCol>
                        </CRow>
                    </CCardHeader>
                </CCard>

                <CDataTable
                    items={message}
                    fields={['موضوع', 'فرستنده', 'متن', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    bordered
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">

                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deleteMessageAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'موضوع':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.subject}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'فرستنده':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.name}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'متن':
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
                                طرح ها
                        </CCol>
                            <CCol col="6" xl className="mb-3 mb-xl-0">
                                <CButton block color="success">افزودن</CButton>
                            </CCol>
                        </CRow>
                    </CCardHeader>
                </CCard>

                <CDataTable
                    items={proposal}
                    fields={['نام طرح', 'کد طرح', 'عملیات',]}
                    hover
                    striped
                    bordered
                    itemsPerPage={10}
                    bordered
                    scopedSlots={{
                        'عملیات':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="2" xl className="mb-3 mb-xl-0">
                                            <CButton block color="success">مشاهده</CButton>
                                        </CCol>
                                        {/* <CCol col="2" xl className="mb-3 mb-xl-0">
                                            <CButton block color="warning">ویرایش</CButton>
                                        </CCol> */}
                                        <CCol col="2" xl className="mb-3 mb-xl-0">
                                            <CButton onClick={() => {
                                                deleteProposalAxios(item.id).then((res) => {
                                                    console.log(res)
                                                })
                                            }} block color="danger">حذف</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'نام طرح':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.title}
                                        </CCol>
                                    </CRow>
                                </td>
                            ),
                        'کد طرح':
                            (item) => (
                                <td>
                                    <CRow className="align-items-center">
                                        <CCol col="4" xl className="mb-3 mb-xl-0">
                                            {item.unique_code}
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
                    itemsPerPage={10}
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
                    itemsPerPage={10}
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
                    itemsPerPage={10}
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


