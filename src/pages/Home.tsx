import { HStack, Stack } from '@chakra-ui/react'
import GitHubRepoForm from '../blocks/GitHubRepoForm'
import { buttonTitles, placeholders } from '@/lib/data'
import BreadcrumbMenu from '@/blocks/BreadcrumbMenu'
import { useState } from 'react'
import Rating from '@/blocks/Rating'
import { Board } from '@/blocks/Board'
import { extractPathSegments } from '@/utils/helpers/helpers'
import { useGithubRepository } from '@/utils/hooks/useGithubRepository'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'

const Home = () => {
  const [menuLinks, setMenuLinks] = useState<string[]>([])
  const { stargazersCount, isLoading, isError, error } =
    useGithubRepository(menuLinks)

  const handleSubmit = (formData: { githubRepo: string }) => {
    const pathSegments = extractPathSegments(formData.githubRepo)
    setMenuLinks(pathSegments)
  }

  return (
    <Stack paddingX="8" align="center" justify="center" h="100vh">
      <GitHubRepoForm
        placeholder={placeholders.URLInput}
        buttonText={buttonTitles.URLSubmit}
        onSubmit={handleSubmit}
      />
      <HStack>
        {isError && <ErrorMessage error={error as Error} />}
        {isLoading && <Loader />}
        {menuLinks.length > 0 && stargazersCount ? (
          <>
            <BreadcrumbMenu pathSegments={menuLinks} />
            <Rating rating={stargazersCount} />
          </>
        ) : null}
      </HStack>
      <Board />
    </Stack>
  )
}

export default Home
