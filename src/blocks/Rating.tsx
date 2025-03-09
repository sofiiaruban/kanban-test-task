import { HStack, Icon, Stat } from '@chakra-ui/react'
import { FC } from 'react'
import { IoIosStar } from 'react-icons/io'

interface RatingProps {
  rating: string
}

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <Stat.Root>
      <HStack justify="space-between">
        <Icon as={IoIosStar} color="yellow.400" />
        <Stat.ValueText>{rating}</Stat.ValueText>
      </HStack>
    </Stat.Root>
  )
}

export default Rating
