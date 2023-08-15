import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'مدیریت کاربران',
    to: '/userspanel',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'مدیریت رشته ها و دروس',
    to: '/fields',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'مدیریت کلاس ها',
    to: '/platos',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'مدیریت زمان بندی ها',
    to: '/schedule',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  }
]

export default _nav
