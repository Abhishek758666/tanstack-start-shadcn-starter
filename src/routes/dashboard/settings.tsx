import { createFileRoute } from '@tanstack/react-router'
import SettingsPage from '@/pages/dashboard/settings-page'

export const Route = createFileRoute('/dashboard/settings')({
    component: SettingsPage,
})
