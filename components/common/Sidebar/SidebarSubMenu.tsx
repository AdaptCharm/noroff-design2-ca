import { FC, useState } from 'react'
import Link from 'next/link'
import cn from 'clsx'
import type { SidebarData } from './SidebarData'

import { ArrowRight } from '@components/icons'
import { Text } from '@components/ui'

interface Props {
  item: SidebarData
}

const SidebarSubMenu: FC<Props> = ({ item }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <li className="my-4">
        <details
          className="overflow-hidden transition-height ease-[ease] duration-200"
          onClick={item.subNav && showSubnav}
          open={!subnav}
        >
          <summary>
            <div className="flex items-center">
              <span
                className={cn(
                  'inline-flex mr-3 transition-transform ease-[ease] duration-200',
                  {
                    'rotate-90': item.subNav && subnav,
                  }
                )}
              >
                <ArrowRight />
              </span>
              <Text as="small">
                {item.subNav && subnav ? (
                  <b className="text-black">{item.name}</b>
                ) : (
                  item.name
                )}
              </Text>
            </div>
          </summary>
          <ul className="ml-2 pl-6 border-l border-gray-200">
            {subnav &&
              item.subNav
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item, index) => (
                  <li className="my-4" key={index}>
                    <Link href={item.path}>
                      <a>
                        <Text as="small">{item.name}</Text>
                      </a>
                    </Link>
                  </li>
                ))}
          </ul>
        </details>
      </li>
    </>
  )
}

export default SidebarSubMenu
