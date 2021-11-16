import React, { FC } from 'react'
import Link from 'next/link'

import { siteConfig } from '@config/constants'
import { Logo } from '@components/icons'

import { SidebarData } from './SidebarData'
import SidebarSubMenu from './SidebarSubMenu'

const Sidebar: FC = () => {
  const { site } = siteConfig

  return (
    <aside className="fixed top-0 pt-14 h-screen w-[200px] hidden md:flex flex-col gap-y-12">
      <div>
        <Link href="/">
          <a className="flex items-center transition-opacity duration-200 ease-in-out gap-x-2 hover:opacity-40">
            <span className="sr-only">{site.name}</span>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="overflow-y-auto scrolling-touch">
        <ul>
          {SidebarData.map((item, index) => (
            <SidebarSubMenu item={item} key={index} />
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
