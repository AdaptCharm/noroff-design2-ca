/**
 * The default site configuration.
 */
export const siteConfig = {
  /**
   * Generally used by any components.
   */
  site: {
    name: 'Sparkling Interior',
    url: 'https://jamie-isaksen-design2-ca.vercel.app',
  },

  /**
   * Used by the `Page` component.
   */
  seo: {
    title: 'Style guide',
    description: 'The course assignment for Design 2.',
    type: 'website',
    twitter: {
      site: '@jamie-isaksen-design2-ca',
      card: 'summary_large_image',
    },
  },

  /**
   * Used by the `Navbar` and `Footer` components.
   */
  navigation: {
    items: {
      center: [
        { name: 'Tjenester', href: '/tjenester' },
        { name: 'Blogg', href: '/blogg' },
      ],
      right: [{ name: 'Kontakt oss', href: '/kontakt-oss' }],
    },
  },
}
