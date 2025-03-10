import { Heading, Stack } from '@chakra-ui/react'
import { FC } from 'react'
import IssueCard from './IssueCard'
import { TransformedIssue } from '@/types/types'

interface ColumnProps {
  title: string
  issuesList: TransformedIssue[] | undefined
  id?: string
}

const Column: FC<ColumnProps> = ({ title, issuesList }) => {
  return (
    <Stack justify="center" gap={2}>
      <Heading>{title}</Heading>
      <Stack
        p={3}
        rounded="md"
        borderWidth="1px"
        borderStyle="solid"
        backgroundColor="gray.200"
        gap={2}
      >
        {issuesList?.map((issue) => (
          <IssueCard
            title={issue.title}
            issueId={issue.issueId}
            key={issue.issueId}
            createdAt={issue.createdAt}
            userType={issue.userType}
            commentsQuantity={issue.commentsQuantity}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Column
