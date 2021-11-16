import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import cn from 'clsx'
import { Navbar, Sidebar, Footer } from '@components/common'

import { siteConfig } from '@config/constants'

interface MetaProps {
  title?: string
  description?: string
  type?: string
  date?: string
}

interface PageProps extends MetaProps {
  className?: string
  children: ReactNode
}

export const Page: FC<PageProps> = ({ className, children, ...newProps }) => {
  const { asPath } = useRouter()

  const { seo, site } = siteConfig
  const meta = Object.assign({}, seo, { ...newProps })

  return (
    <>
      <Head>
        <title>{`${meta.title} | ${site.name}`}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${site.url}${asPath}`} />
        <meta property="og:url" content={`${site.url}${asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:site" content={meta.twitter.site} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="min-h-screen max-w-7xl mx-auto px-6">
        <Sidebar />
        <main
          className={cn(
            'md:ml-64 py-11 flex flex-col items-center justify-center flex-grow',
            className
          )}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Page
