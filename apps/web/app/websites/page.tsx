import { ClientProjectsList } from '@/components/projects-list'
import { getAllWebsites } from '@/lib/mdx'
import { Breadcrumb } from '@thedaviddias/design-system/breadcrumb'
import { getBaseUrl } from '@thedaviddias/utils/get-base-url'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl()

  return {
    title: 'Websites - llms.txt hub',
    description: 'Discover a curated list of websites that implement the llms.txt standard.',
    alternates: {
      canonical: `${baseUrl}/websites`
    }
  }
}

export default async function ProjectsPage() {
  const websites = await getAllWebsites()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ name: 'Websites', href: '/website' }]} baseUrl={getBaseUrl()} />
      <ClientProjectsList initialWebsites={websites} />
    </div>
  )
}
