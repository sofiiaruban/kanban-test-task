import Column from '@/components/Column'
import { boardColumns } from '@/lib/data'
import { TransformedIssue } from '@/types/types'
import { Grid } from '@chakra-ui/react'
import { FC } from 'react'

interface BoardProps {
  issuesList: TransformedIssue[] | undefined
}

export const Board: FC<BoardProps> = ({ issuesList }) => {
  return (
    <main>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {boardColumns.map((column) => (
          <Column title={column.title} issuesList={issuesList} />
        ))}
      </Grid>
    </main>
  )
}
