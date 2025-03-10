import { FC } from 'react'
import { Card, HStack, Separator, Text } from '@chakra-ui/react'
import { getTimeAgo } from '@/utils/helpers/helpers'
interface IssueCardProps {
  title: string
  issueId: number
  createdAt: string
  userType: string
  commentsQuantity: number
}

const IssueCard: FC<IssueCardProps> = ({
  title,
  issueId,
  createdAt,
  userType,
  commentsQuantity
}) => {
  const openedAt = getTimeAgo(createdAt)

  return (
    <Card.Root>
      <Card.Header>
        <Text textTransform="capitalize">{title}</Text>
      </Card.Header>
      <Card.Body>
        <HStack>
          <Text>#{issueId}</Text>
          <Text>{openedAt}</Text>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Text>{userType}</Text>
        <Separator orientation="vertical" height="4" />
        <Text>Comments:{commentsQuantity}</Text>
      </Card.Footer>
    </Card.Root>
  )
}

export default IssueCard
