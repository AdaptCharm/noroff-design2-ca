import type { FC } from 'react'
import { siteConfig } from '@config/constants'

const Footer: FC = () => {
  const { site } = siteConfig

  return (
    <footer
      className="bg-gray-50 border-t border-gray-200"
      aria-labelledby="footer-heading"
    >
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
