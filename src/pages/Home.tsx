import { Box, Heading, HStack, Stack } from '@chakra-ui/react'
import GitHubRepoForm from '../blocks/GitHubRepoForm'
import { buttonTitles, placeholders } from '@/lib/data'
import { FormValues } from '@/types/types'
import BreadcrumbMenu from '@/blocks/BreadcrumbMenu'
import { useState } from 'react'
import Rating from '@/blocks/Rating'
import { Board } from '@/blocks/Board'

const Home = () => {
  const [repoUrl, setRepoUrl] = useState<string>('')
  const handleSubmit = (data: FormValues) => {
    console.log('Received valid URL:', data.githubRepo)
    setRepoUrl(data.githubRepo)
  }
  return (
    <Stack paddingX="8" align="center" justify="center" h="100vh">
      <GitHubRepoForm
        placeholder={placeholders.URLInput}
        buttonText={buttonTitles.URLSubmit}
        onSubmit={handleSubmit}
      />
      <HStack>
        {repoUrl ? <BreadcrumbMenu url={repoUrl} /> : null}
        <Rating rating="13.1" />
      </HStack>
      <Board />
    </Stack>
  )
}

export default Home
