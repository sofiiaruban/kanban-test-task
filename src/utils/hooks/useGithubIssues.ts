import { useQuery } from '@tanstack/react-query'
import { fetchFromGithub } from '../helpers/helpers'
import { GithubIssue } from '@/types/types'

interface UseGithubIssuesReturnType {
  isLoading: boolean
  isError: boolean
  data: GithubIssue[] | undefined
  error: unknown
}

export const useGithubIssues = (
  pathSegment: string[]
): UseGithubIssuesReturnType => {
  const [owner, repo] = pathSegment
  const endpoint = `/repos/${owner}/${repo}/issues`
  const { isLoading, isError, data, error } = useQuery<GithubIssue[]>({
    queryKey: ['githubIssues', owner, repo],
    queryFn: () => fetchFromGithub(endpoint)
  })
  
  return { isLoading, isError, data, error }
}
