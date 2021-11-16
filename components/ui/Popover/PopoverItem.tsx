import { FC, HTMLAttributes, memo } from 'react'
import cn from 'clsx'
import { withDefaults } from '@lib/collections'

interface Props {
  line?: boolean
  title?: boolean
  item?: boolean
  children?: React.ReactNode
}

const defaultProps = {
  line: false,
  title: false,
  item: false,
  className: '',
}

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
export type PopoverItemProps = Props & typeof defaultProps & NativeAttrs

const PopoverItem: FC<PopoverItemProps> = ({
  line,
  title,
  item,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <div
        className={cn(
          {
            'transition-colors ease-[ease] duration-100 ': title || item,
            'px-5 py-2 text-black': title,
            'my-2 border-t-[1px] border-gray-200': line,
            'py-2 px-5 text-sm max-w-full hover:bg-gray-100 text-gray-500 hover:text-black':
              item,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
      {title && <PopoverItem line item={false} title={false} className="" />}
    </>
  )
}

export default withDefaults(memo(PopoverItem), defaultProps)
