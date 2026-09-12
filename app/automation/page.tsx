import type { Metadata } from 'next'
import { AutomationContent } from '@/components/automation-content'

export const metadata: Metadata = {
  title: 'Business automation — bots, AI agents, integrations',
  description:
    'Telegram bots with AI agents, embedding AI into products, data parsing, backend development, 1C bridges and integrations with Wildberries, Ozon and Yandex.Market marketplaces.',
}

export default function AutomationPage() {
  return <AutomationContent />
}
