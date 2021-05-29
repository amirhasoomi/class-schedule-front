import React, {
  useState,
  useEffect,
  CNav,
  CNavLink
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
  CRow
} from '@coreui/react'

//Api
import {
  getSliderAxios,
  getBannerAxios,
  getPartnersAxios,
  getSupportsAxios
} from "../../api/axios";


export default function Home() {

  // api state:
  const [slider, setSlider] = useState([]);
  const [banners, setBanners] = useState([]);
  const [partners, setPartners] = useState([]);
  const [supports, setSupports] = useState([]);

  useEffect(() => {
    getSliderAxios().then((res) => {
      // console.log(res.data)
      setSlider(res.data)
    });
    getBannerAxios().then((res) => {
      // console.log(res.data)
      setBanners(res.data)
    });
    getPartnersAxios().then((res) => {
      // console.log(res.data)
      setPartners(res.data)
    });
    getSupportsAxios().then((res) => {
      // console.log(res.data)
      setSupports(res.data)
    });
    return () => {
      // setUserData([]);
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
                      <img className="d-block w-100" src={slide.image} />
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
                    <img className="d-block w-100" src={partner.logo} />
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


    </>
  )
}

