import React, { FC, useState } from 'react'
import Link from 'next/link'
import cn from 'clsx'

import { siteConfig } from '@config/constants'
import { Logo } from '@components/icons'

import { SidebarData } from './SidebarData'
import SidebarSubMenu from './SidebarSubMenu'
import { Button } from '@components/ui'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Sidebar: FC = () => {
  const [menuActive, setMenuActive] = useState(false)
  const { site } = siteConfig

  return (
    <>
      <div className="fixed z-20 md:hidden right-6 top-6">
        <Button
          size="large"
          shape="circle"
          onClick={() => setMenuActive(!menuActive)}
        >
          {menuActive ? (
            <>
              <span className="sr-only">Close menu</span>
              <XIcon />
            </>
          ) : (
            <>
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </>
          )}
        </Button>
      </div>
      <div
        className={cn(
          'fixed z-10 top-0 pt-8 md:pt-14 h-screen inset-x-6 md:inset-x-auto md:w-[200px]',
          {
            'hidden md:block': !menuActive,
          }
        )}
      >
        <div className="absolute inset-0 bg-white opacity-95" />
        <div className="relative flex flex-col gap-y-6 md:gap-y-12">
          <Link href="/">
            <a className="flex items-center transition-opacity duration-200 ease-in-out gap-x-2 hover:opacity-40">
              <span className="sr-only">{site.name}</span>
              <Logo />
            </a>
          </Link>
          <div className="overflow-y-auto scrolling-touch">
            <ul>
              {SidebarData.map((item, index) => (
                <SidebarSubMenu item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
