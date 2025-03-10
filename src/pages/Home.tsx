import { HStack, Stack } from '@chakra-ui/react'
import GitHubRepoForm from '../blocks/GitHubRepoForm'
import { buttonTitles, placeholders } from '@/lib/data'
import BreadcrumbMenu from '@/blocks/BreadcrumbMenu'
import { useState } from 'react'
import Rating from '@/blocks/Rating'
//import { Board } from '@/blocks/Board'
import { extractPathSegments } from '@/utils/helpers/helpers'
import { useGithubRepository } from '@/utils/hooks/useGithubRepository'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'
//import Column from '@/components/Column'
import { useGithubIssues } from '@/utils/hooks/useGithubIssues'
import { Board } from '@/blocks/Board'

const Home = () => {
  const [menuLinks, setMenuLinks] = useState<string[]>([])
  //const [initialIssuesList, setInitialIssuesList] = useState

  const {
    stargazersCount,
    isLoading: isRepositoryLoading,
    isError: isRepositoryError,
    error: repositoryError
  } = useGithubRepository(menuLinks)

  const {
    data: issues
    //isLoading: isIssuesLoading,
    //isError: isIssuesError,
    //error: issuesError
  } = useGithubIssues(menuLinks)

  const handleSubmit = (formData: { githubRepo: string }) => {
    const pathSegments = extractPathSegments(formData.githubRepo)
    setMenuLinks(pathSegments)
  }

  return (
    <Stack paddingX="8" justify="center">
      <GitHubRepoForm
        placeholder={placeholders.URLInput}
        buttonText={buttonTitles.URLSubmit}
        onSubmit={handleSubmit}
      />
      <HStack>
        {isRepositoryError && <ErrorMessage error={repositoryError as Error} />}
        {isRepositoryLoading && <Loader />}
        {menuLinks.length > 0 && stargazersCount ? (
          <>
            <BreadcrumbMenu pathSegments={menuLinks} />
            <Rating rating={stargazersCount} />
          </>
        ) : null}
      </HStack>
      <Board issuesList={issues} />
    </Stack>
  )
}
//      {isIssuesError && <ErrorMessage error={issuesError as Error} />}
//
// isIssuesLoading && <Loader />
//
//
// issues && <Column title="TO DO" issuesList={issues} />
//
//
//
export default Home
