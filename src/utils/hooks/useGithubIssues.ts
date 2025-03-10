import { useQuery } from '@tanstack/react-query'
import { fetchFromGithub, transformIssues } from '../helpers/helpers'
import { GithubIssue, TransformedIssue } from '@/types/types'

interface UseGithubIssuesReturnType {
  isLoading: boolean
  isError: boolean
  data: TransformedIssue[] | undefined
  error: unknown
}

export const useGithubIssues = (
  pathSegment: string[]
): UseGithubIssuesReturnType => {
  const [owner, repo] = pathSegment
  const endpoint = `/repos/${owner}/${repo}/issues?per_page=5&page=1`
  const { isLoading, isError, data, error } = useQuery<
    GithubIssue[],
    unknown,
    TransformedIssue[]
  >({
    queryKey: ['githubIssues', owner, repo],
    queryFn: () => fetchFromGithub(endpoint),
    enabled: !!owner && !!repo,
    select: transformIssues
  })

  return { isLoading, isError, data, error }
}
