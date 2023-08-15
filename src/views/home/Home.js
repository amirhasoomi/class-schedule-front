import React, {
  useEffect,
} from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane

} from '@coreui/react'




export default function Home() {

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <>
      <CCard>
        <CCardHeader>
          سامانه کلاس بندی
        </CCardHeader>
        <CCardBody>
          <p> این برنامه یک  <b>پروژه دانشگاهی</b> بوده و گسترش و انتشار آن منوط به <b>اخذ مچوز کتبی از توسعه دهنده</b>  آن مبیاشد.</p>

          <CTabs>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink>
                  اطلاعات توسعه دهنده
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>
                  اطلاعات نرم افزار
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>
                  راه های ارتباطی
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane>
                <p>نام و نام خانوادگی:  سید حسین شریفی</p>
                <p>شماره دانشجویی: ۹۹۲۲۱۰۲۲۱۱۱۰۱۲</p>
                <p>استاد راهنما: جناب آقای دکتر مجید جان نثاری</p>
              </CTabPane>
              <CTabPane>
                <p>تکنولوژی ها ی بکار گرفته شده در این نرم افزار عبارت اند از:</p>
                <p>back-End: Python 3.8.17</p>
                <p>frameworks: Django 3.2.2,  Django rest framework 3.12.4</p>
                <p></p>
                <p>front-End: React </p>
                <p>template: React CoreUI</p>
                <p>جهت دریافت سورس پروژه تماس بگیرید</p>
              </CTabPane>
              <CTabPane>
                Email: hosseinsharifi092@gmail.com
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </>
  )
}

