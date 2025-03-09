import { BASE_URL } from '@/lib/data'

export const generateLinksFromUrl = (url: string): Record<string, string> => {
  const cleanPath = url.replace(`${BASE_URL}/`, '')

  const pathSegments = cleanPath.split('/').filter(Boolean)

  if (pathSegments.length < 2) return {}

  const links: Record<string, string> = {}

  pathSegments.forEach((segment, index) => {
    const fullUrl = `${BASE_URL}/${pathSegments.slice(0, index + 1).join('/')}`
    links[segment] = fullUrl
  })

  return links
}
