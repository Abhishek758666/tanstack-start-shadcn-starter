import ProductPage from '@/pages/dashboard/product-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/products')({
  component: ProductPage,
})

