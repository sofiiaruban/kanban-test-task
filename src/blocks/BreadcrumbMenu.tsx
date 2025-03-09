import { generateLinksFromUrl } from '@/utils/helpers/helpers'
import { Breadcrumb } from '@chakra-ui/react'
import { Tooltip } from '@/components/ui/tooltip'
import { FC } from 'react'

interface BreadcrumbMenuProps {
  url: string
}

const BreadcrumbMenu: FC<BreadcrumbMenuProps> = ({ url }) => {
  const menuLinks = generateLinksFromUrl(url)
  const menuLinksArray = Object.entries(menuLinks)
  const lastMenuItemIndex = menuLinksArray.length - 1
  
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        {menuLinksArray.map(([key, value], index) => (
          <Breadcrumb.Item key={index}>
            <Tooltip content={`Go to ${value}`}>
              <Breadcrumb.Link href={value}>{key}</Breadcrumb.Link>
            </Tooltip>
            {index !== lastMenuItemIndex && <Breadcrumb.Separator />}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

export default BreadcrumbMenu
