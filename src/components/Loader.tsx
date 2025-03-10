import { Alert, Spinner } from '@chakra-ui/react'
import { FC } from 'react'

const Loader: FC = () => {
    return (
      <Alert.Root
        borderStartWidth="3px"
        borderStartColor="colorPalette.600"
        title="We are loading something"
      >
        <Alert.Indicator>
          <Spinner size="sm" />
        </Alert.Indicator>
        <Alert.Title>We are loading something...</Alert.Title>
      </Alert.Root>
  )
}

export default Loader
