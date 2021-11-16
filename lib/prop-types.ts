export const tuple = <T extends string[]>(...args: T) => args

const buttonTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'abort',
  'secondary-light',
  'success-light',
  'warning-light',
  'error-light'
)

const variantTypes = tuple('primary', 'secondary')

const sizeTypes = tuple('small', 'medium', 'large')

const colorTypes = tuple('primary', 'secondary', 'success', 'warning', 'error')

const shapeTypes = tuple('circle', 'rounded', 'square')

const triggerTypes = tuple('hover', 'click')

const placementTypes = tuple(
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'bottom',
  'bottomStart',
  'bottomEnd',
  'right',
  'rightStart',
  'rightEnd'
)

export type ButtonTypes = typeof buttonTypes[number]

export type VariantTypes = typeof variantTypes[number]

export type SizeTypes = typeof sizeTypes[number]

export type ColorTypes = typeof colorTypes[number]

export type ShapeTypes = typeof shapeTypes[number]

export type TriggerTypes = typeof triggerTypes[number]

export type PlacementTypes = typeof placementTypes[number]
