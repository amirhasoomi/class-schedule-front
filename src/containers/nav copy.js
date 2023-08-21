import React from 'react'
import CIcon from '@coreui/icons-react'

const nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'کلاس های من',
    to: '/userspanel',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'ساعات حضور',
    to: '/availability',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  }
]

export default nav
