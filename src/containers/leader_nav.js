import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'پنل کاربری',
    to: '/dashboard',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'پروفایل',
    to: '/widgets',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'طرح های من',
    route: '/base',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'طرح جدید',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'همه طرح ها',
        to: '/base/cards',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'تیم من',
    route: '/buttons',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'عضو جدید',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'همه اعضا',
        to: '/buttons/brand-buttons',
      },
    ],
  },
]

export default _nav
