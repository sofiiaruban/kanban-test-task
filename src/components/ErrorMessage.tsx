import { Alert } from '@chakra-ui/react'
import { FC } from 'react'

interface ErrorMessageProps {
  error: Error | null
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null
  return (
    <Alert.Root status="error" variant="solid">
      <Alert.Indicator />
      <Alert.Description>{error.message}</Alert.Description>
    </Alert.Root>
  )
}

export default ErrorMessage
