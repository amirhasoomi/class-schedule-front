import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/images.png'}
            className="c-avatar-img"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">


        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />حساب کاربری
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          تنظیمات
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          خروج
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
