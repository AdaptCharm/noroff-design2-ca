import type { FC, ReactNode } from 'react'
import cn from 'clsx'
import s from './Badge.module.css'

interface Props {
  className?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
  shape?: 'square' | 'rounded' | 'circle'
  children: ReactNode
}

const Badge: FC<Props> = ({
  className,
  color = 'primary',
  size = 'small',
  shape = 'circle',
  children,
}) => {
  const rootClassName = cn(
    s.root,
    [s[`${color}`]],
    [s[`${size}`]],
    [s[`${shape}`]],
    className
  )

  return <span className={rootClassName}>{children}</span>
}

export default Badge
