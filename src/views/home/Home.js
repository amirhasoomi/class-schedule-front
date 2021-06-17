import React, {
  useState,
  useEffect,
} from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CTextarea,

} from '@coreui/react'

//Api
import {
  getSliderAxios,
  getBannerAxios,
  getPartnersAxios,
  getSupportsAxios,
  PostmessageAxios
} from "../../api/axios";


export default function Home() {

  // api state:
  const [slider, setSlider] = useState([]);
  const [banners, setBanners] = useState([]);
  const [partners, setPartners] = useState([]);
  const [supports, setSupports] = useState([]);
  const [subject, setSubject] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const handleContact = () => {
    PostmessageAxios({ subject: subject, Name: sender, text: message }).then((res) => {
      console.log(res.status)
    })
  }
  useEffect(() => {
    getSliderAxios().then((res) => {
      setSlider(res.data)
    });
    getBannerAxios().then((res) => {
      setBanners(res.data)
    });
    getPartnersAxios().then((res) => {
      setPartners(res.data)
    });
    getSupportsAxios().then((res) => {
      setSupports(res.data)
    });
    return () => {
    };
  }, []);

  return (
    <>
      <CRow>
        <CCol xs="12" xl="12">
          <CCardBody>
            <CCarousel animate autoSlide={5000}>
              <CCarouselIndicators />
              <CCarouselInner>
                {slider.map((slide) => {
                  return (
                    <CCarouselItem>
                      <img className="d-block w-100" src={slide.image} alt={slide.text} />
                      <CCarouselCaption><h3>{slide.title}</h3><p>{slide.text}</p></CCarouselCaption>
                    </CCarouselItem>
                  );
                })}
              </CCarouselInner>
              <CCarouselControl direction="prev" />
              <CCarouselControl direction="next" />
            </CCarousel>
          </CCardBody>
        </CCol>
      </CRow>
      <CCard>
        <CCardHeader>
          اطلاع رسانی
          </CCardHeader>
      </CCard>
      <CRow>
        {banners.map((banner) => {
          return (
            <CCol xs="12" sm="4" md="3">
              <CCard accentColor="info">
                <CCardHeader>
                  {banner.title}
                </CCardHeader>
                <CCardBody>
                  {banner.text}
                </CCardBody>
              </CCard>
            </CCol>
          );
        })}
      </CRow>
      <CCard>
        <CCardHeader>
          همکاران
          </CCardHeader>
      </CCard>
      <CRow>
        {partners.map((partner) => {
          return (
            <CCol xs="12" sm="6" md="2">
              <CCard color="primary" className="text-white text-center">
                <CCardBody>
                  <blockquote className="card-bodyquote">
                    <img className="d-block w-100" src={partner.logo} alt={partner.name} />
                    <footer>{partner.name}</footer>
                  </blockquote>
                </CCardBody>
              </CCard>
            </CCol>
          )
        })}
      </CRow>
      <CCard>
        <CCardHeader>
          درباره ما
        </CCardHeader>
      </CCard>
      <div className="bd-example">
        <dl className="row">
          <img className="col-sm-6" src="images/about.jpg" alt="about" />
          <dd className="col-sm-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</dd>
        </dl>
      </div>
      <CCard>
        <CCardHeader>
          حامیان
          </CCardHeader>
      </CCard>
      <CRow>
        {supports.map((support) => {
          return (
            <CCol xs="12" sm="6" md="2">
              <CCard color="warning" className="text-white text-center">
                <CCardBody>
                  <footer ><a href={support.link}>{support.name}</a></footer>
                </CCardBody>
              </CCard>
            </CCol>
          )
        })}
      </CRow>
      <CCard>
        <CCardHeader>
          تماس با ما
        </CCardHeader>
      </CCard>
      <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="text-input">موضوع پیام</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput value={subject} onInput={e => setSubject(e.target.value)} placeholder="موضوع" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="text-input">نام و نام خانوادگی</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput value={sender} onInput={e => setSender(e.target.value)} id="text-input" name="text-input" placeholder="نام و نام خانوادگی" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="textarea-input">متن پیام</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CTextarea
              name="textarea-input"
              id="textarea-input"
              rows="9"
              placeholder="متن پیام..."
              value={message} onInput={e => setMessage(e.target.value)}
            />
          </CCol>
        </CFormGroup>
        <CButton onClick={handleContact} color="primary"> ارسال</CButton>
      </CForm>
    </>
  )
}

