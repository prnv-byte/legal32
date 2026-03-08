/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-amber-500/30 selection:text-amber-200">
      {/* The Sanity Studio takes over the UI here, but wrapping it in our 
        dark background prevents the harsh white flash on initial load, 
        maintaining your premium editorial aesthetic.
      */}
      <div className="animate-fade-in duration-1000">
        <NextStudio config={config} />
      </div>
    </div>
  )
}