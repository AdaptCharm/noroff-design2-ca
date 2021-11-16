import {
  FC,
  MutableRefObject,
  ReactNode,
  useRef,
  useState,
  useEffect,
  MouseEvent,
  useCallback,
} from 'react'
import { createPortal } from 'react-dom'
import {
  PlacementTypes,
  SizeTypes,
  ColorTypes,
  ShapeTypes,
} from '@lib/prop-types'
import {
  getPosition,
  TooltipPosition,
  defaultTooltipPosition,
} from './TooltipPlacement'
import { useResize, useClickAnywhere, usePortal } from '@lib/hooks'
import { Transition } from '@components/ui'
import cn from 'clsx'
import s from './TooltipContent.module.css'

interface Props {
  className?: string
  parent?: MutableRefObject<HTMLElement | null> | undefined
  placement: PlacementTypes
  size: SizeTypes
  color: ColorTypes
  shape: ShapeTypes
  visible: boolean
  offset: number
  children: ReactNode
}

interface ReactiveDomReact {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}

const defaultRect: ReactiveDomReact = {
  top: -1000,
  left: -1000,
  right: -1000,
  bottom: -1000,
  width: 0,
  height: 0,
}

const getRect = (
  ref: MutableRefObject<HTMLElement | null>
): ReactiveDomReact => {
  if (!ref || !ref.current) return defaultRect
  const rect = ref.current.getBoundingClientRect()
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + document.documentElement.scrollTop,
    bottom: rect.bottom + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft,
  }
}

const TooltipContent: FC<Props> = ({
  className,
  parent,
  placement,
  size,
  color,
  shape,
  visible,
  offset,
  children,
}) => {
  const el = usePortal('tooltip')
  const selfRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<TooltipPosition>(defaultTooltipPosition)

  const updateRect = useCallback(() => {
    if (!parent) return null
    const position = getPosition(placement, getRect(parent), offset)
    setRect(position)
  }, [offset, parent, placement])

  useEffect(() => {
    updateRect()
  }, [updateRect, visible])

  useResize(updateRect)
  useClickAnywhere(() => updateRect())

  const preventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }

  if (!el) return null

  return createPortal(
    <Transition visible={visible}>
      <div
        className={cn(s.root, [s[`${shape}`]])}
        style={{
          transform: rect.transform,
          top: rect.top,
          left: rect.left,
        }}
        ref={selfRef}
        onClick={preventHandler}
      >
        <div
          className={cn(
            s.inner,
            [s[`${color}`]],
            [s[`${size}`]],
            [s[`${shape}`]],
            className
          )}
        >
          {children}
        </div>
      </div>
    </Transition>,
    el
  )
}

export default TooltipContent
