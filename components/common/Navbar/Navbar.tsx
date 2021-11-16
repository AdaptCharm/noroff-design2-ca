import { FC, useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/outline'

import { siteConfig } from '@config/constants'
import { Container } from '@components/ui'
import { Logo } from '@components/icons'

const Navbar: FC = () => {
  const [menuActive, setMenuActive] = useState(false)

  const { site, navigation } = siteConfig

  return (
    <div className="fixed inset-x-0 z-50 bg-white backdrop-blur backdrop-filter bg-opacity-10">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Left nav */}
          <div className="lg:flex-1 lg:flex lg:items-center">
            <Link href="/">
              <a className="flex items-center transition-opacity duration-200 ease-in-out gap-x-2 hover:opacity-40">
                <span className="sr-only">{site.name}</span>
                <Logo />
              </a>
            </Link>
          </div>

          {/* Center nav */}
          <div className="hidden lg:flex lg:space-x-8">
            {navigation.items.center.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className="flex items-center text-sm font-semibold text-black transition-opacity duration-200 ease-in-out hover:opacity-40">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Right nav */}
          <div className="flex justify-end flex-1">
            <div className="flex items-center space-x-8">
              {navigation.items.right.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a className="hidden text-sm font-semibold text-black transition-opacity duration-200 ease-in-out hover:opacity-40 lg:block">
                    {item.name}
                  </a>
                </Link>
              ))}

              {/* Mobile menu */}
              <div className="flex items-center flex-1 lg:hidden">
                <button
                  className="px-2 py-1.5 -ml-2 text-black bg-black rounded-full bg-opacity-5 hover:bg-opacity-10"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
