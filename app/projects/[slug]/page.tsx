import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProject, projectSlugs } from '@/lib/projects'
import { ProjectDetail } from '@/components/project-detail'

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  // Metadata is static per build — use the default locale content.
  const project = getProject(slug, 'en')
  if (!project) return {}
  return {
    title: `${project.name} — Yulian S.`,
    description: project.tagline,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!projectSlugs.includes(slug)) notFound()

  return <ProjectDetail slug={slug} />
}
