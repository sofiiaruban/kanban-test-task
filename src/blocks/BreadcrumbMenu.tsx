import { Breadcrumb, Text } from '@chakra-ui/react'
import { Tooltip } from '@/components/ui/tooltip'
import { FC } from 'react'
import { generateLinksFromSegments } from '@/utils/helpers/helpers'

interface BreadcrumbMenuProps {
  pathSegments: string[]
}

const BreadcrumbMenu: FC<BreadcrumbMenuProps> = ({ pathSegments }) => {
  const menuLinks = generateLinksFromSegments(pathSegments)
  const menuLinksArray = Object.entries(menuLinks)
  const lastMenuItemIndex = menuLinksArray.length - 1

  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        {menuLinksArray.map(([key, value], index) => (
          <Breadcrumb.Item key={index}>
            <Tooltip content={`Go to ${value}`}>
              <Breadcrumb.Link href={value}>
                <Text textTransform="capitalize">{key}</Text>
              </Breadcrumb.Link>
            </Tooltip>
            {index !== lastMenuItemIndex && <Breadcrumb.Separator />}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

export default BreadcrumbMenu
