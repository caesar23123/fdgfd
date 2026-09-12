import type { Metadata } from 'next'
import { ServicesContent } from '@/components/services-content'

export const metadata: Metadata = {
  title: 'Interactive solutions for business — Unity development',
  description:
    '3D product configurators, staff training simulators, interactive presentations and virtual tours. Unity development for e-commerce, B2B and real estate.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
