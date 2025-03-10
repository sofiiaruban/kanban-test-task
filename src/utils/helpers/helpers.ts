import {
  BASE_URL,
  GITHUB_API_BASE_URL,
  MIN_REQUIRED_SEGMENTS
} from '@/lib/data'
import { GithubIssue, IssueStatus, TransformedIssue } from '@/types/types'
import axios, { AxiosResponse } from 'axios'
import moment from 'moment'

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

export const getTimeAgo = (isoDate: string): string => {
  return moment(isoDate).fromNow()
}

export const transformIssues = (issues: GithubIssue[]): TransformedIssue[] => {
  const transformedIssues = issues.map((issue) => ({
    title: issue.title,
    issueId: issue.id,
    createdAt: issue.created_at,
    userType: issue.user.type,
    commentsQuantity: issue.comments,
    status: 'TODO' as IssueStatus
  }))

  return transformedIssues
}
