import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">سامانه کلاس بندی</a>
        <span className="ml-1">&copy; این برنامه یک پروژه دانشگاهی بوده و گسترش و انتشار آن منوط به اخذ مچوز کتبی از توسعه دهنده آن مبیاشد.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
