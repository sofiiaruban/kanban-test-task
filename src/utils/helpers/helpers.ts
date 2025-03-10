import {
  BASE_URL,
  GITHUB_API_BASE_URL,
  MIN_REQUIRED_SEGMENTS
} from '@/lib/data'
import axios, { AxiosResponse } from 'axios'

export const extractPathSegments = (url: string): string[] => {
  const cleanPath = url.replace(`${BASE_URL}/`, '')
  return cleanPath.split('/').filter(Boolean)
}

export const generateLinksFromSegments = (
  pathSegments: string[]
): Record<string, string> => {
  if (pathSegments.length < MIN_REQUIRED_SEGMENTS) return {}

  const links: Record<string, string> = {}

  pathSegments.forEach((segment, index) => {
    const fullUrl = `${BASE_URL}/${pathSegments.slice(0, index + 1).join('/')}`
    links[segment] = fullUrl
  })
  return links
}

export const fetchFromGithub = async <T>(endpoint: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(
    `${GITHUB_API_BASE_URL}${endpoint}`
  )
  return response.data
}
