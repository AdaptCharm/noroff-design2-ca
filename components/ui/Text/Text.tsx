import type {
  FC,
  ReactNode,
  ReactElement,
  ComponentType,
  JSXElementConstructor,
} from 'react'
import cn from 'clsx'
import s from './Text.module.css'

interface Props {
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span'
  size?: 12 | 14 | 16 | 18 | 20 | 24 | 30 | 36 | 48
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  color?: 'primary' | 'secondary' | 'gray' | 'success' | 'warning' | 'error'
  truncate?: boolean
  capitalize?: boolean
  children: ReactNode | any
}

const Text: FC<Props> = ({
  className,
  as: component = 'p',
  size,
  weight,
  color,
  truncate,
  capitalize,
  children,
}) => {
  const Component: ComponentType<any> | string = component as any

  // const Component:
  //   | JSXElementConstructor<any>
  //   | ReactElement<any>
  //   | ComponentType<any>
  //   | string = components![variant!]

  const rootClassName = cn(
    s.root,
    [s[`${component}`]],
    [s[`size-${size}`]],
    [s[`weight-${weight}`]],
    [s[`color-${color}`]],
    {
      truncate: truncate,
      capitalize: capitalize,
    },
    className
  )

  return <Component className={rootClassName}>{children}</Component>
}

export default Text
