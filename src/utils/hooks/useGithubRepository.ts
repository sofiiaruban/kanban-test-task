import { useQuery } from '@tanstack/react-query'
import { fetchFromGithub } from '../helpers/helpers'
import { Repository } from '@/types/types'

interface UseGithubRepositoryReturnType {
  isLoading: boolean
  isError: boolean
  stargazersCount: number | undefined
  error: unknown
}

export const useGithubRepository = (
  pathSegment: string[]
): UseGithubRepositoryReturnType => {
  const [owner, repo] = pathSegment
  const endpoint = `/repos/${owner}/${repo}`
  const { isLoading, isError, data, error } = useQuery<Repository>({
    queryKey: ['githubRepository', owner, repo],
    queryFn: () => fetchFromGithub<Repository>(endpoint),
    enabled: !!owner && !!repo
  })

  return { stargazersCount: data?.stargazers_count, isLoading, isError, error }
}
