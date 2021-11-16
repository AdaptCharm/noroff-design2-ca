export type SidebarData = {
  name: string
  path: string
  subNav: {
    path: string
    name: string
  }[]
}

export const SidebarData = [
  {
    name: 'Brand',
    path: '/brand',
    subNav: [{ path: '/', name: 'Information' }],
  },
  {
    name: 'Styleguide',
    path: '/styleguide',
    subNav: [
      { path: '/grid', name: 'Grid' },
      { path: '/color', name: 'Color' },
      { path: '/icons', name: 'Icons' },
    ],
  },
  {
    name: 'Components',
    path: '/components',
    subNav: [
      { path: '/text', name: 'Text' },
      { path: '/button', name: 'Button' },
      { path: '/link', name: 'Link' },
      { path: '/card', name: 'Card' },
      { path: '/input', name: 'Input' },
      { path: '/tooltip', name: 'Tooltip' },
      { path: '/badge', name: 'Badge' },
    ],
  },
]
