import type {
  FC,
  ReactNode,
  ReactElement,
  ComponentType,
  JSXElementConstructor,
} from 'react'
import cn from 'clsx'
import s from './Stack.module.css'

interface Props {
  className?: string
  as?: 'div' | 'span'
  gap?: number
  debug?: boolean
  children: ReactNode
}

const Stack: FC<Props> = ({
  className,
  as: component = 'div',
  gap,
  debug,
  children,
}) => {
  const Component: ComponentType<any> | string = component as any

  const rootClassName = cn(
    s.root,
    `gap-${gap}`,
    // [s[`${component}`]],
    // [s[`gap-${gap}`]],
    {
      'bg-red-200': debug,
    },
    className
  )

  return <Component className={rootClassName}>{children}</Component>
}

export default Stack
