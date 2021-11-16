import type { FC, ReactNode, InputHTMLAttributes } from 'react'
import cn from 'clsx'
import s from './Input.module.css'

interface Props {
  className?: string
  size?: 'small' | 'medium' | 'large'
  prefix?: ReactNode
  prefixStyling?: boolean
  suffix?: ReactNode
  suffixStyling?: boolean
  capitalize?: boolean
  disabled?: boolean
  onChange?: (...args: any[]) => any
}

const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  size = 'medium',
  prefix,
  prefixStyling = true,
  suffix,
  suffixStyling = true,
  disabled,
  capitalize,
  onChange,
  ...rest
}) => {
  console.log(prefixStyling)
  const handleOnChange = (evt: any) => {
    if (onChange) {
      onChange(evt.target.value)
    }
    return null
  }

  const rootClassName = cn(
    s.root,
    // s[`${noPrefixStyle}`],
    s[`${size}`],
    {
      [s.prefix]: prefix,
      [s.noPrefixStyle]: !prefixStyling,
      [s.suffix]: suffix,
      [s.noSuffixStyle]: !prefixStyling,
      [s.capitalize]: capitalize,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <div className={rootClassName}>
      <input
        className={s.input}
        disabled={disabled}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
      {prefix && <span>{prefix}</span>}
      {suffix && <span>{suffix}</span>}
    </div>
  )
}

export default Input
