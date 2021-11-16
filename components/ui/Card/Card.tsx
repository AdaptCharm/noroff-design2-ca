import type { FC, HTMLAttributes } from 'react'
import cn from 'clsx'
import s from './Card.module.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Card: FC<Props> = ({ className, children, ...rest }) => {
  const rootClassName = cn(s.root, className)

  return (
    <div className={rootClassName} {...rest}>
      {children}
    </div>
  )
}

export default Card
