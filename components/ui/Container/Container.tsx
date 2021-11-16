import type { FC, ReactNode } from 'react'
import cn from 'clsx'
import s from './Container.module.css'

interface Props {
  className?: string
  fluid?: boolean
  children: ReactNode
}

const Container: FC<Props> = ({ className, fluid, children }) => {
  const rootClassName = cn({ [s.container]: !fluid }, className)

  return <div className={rootClassName}>{children}</div>
}

export default Container
