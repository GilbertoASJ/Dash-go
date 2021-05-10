import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'

export function Header() {

	const { onOpen } = useSidebarDrawer()
 
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	})

	return(
		<Flex 
			w="100%" 
			h="20" 
			as="header" 
			maxWidth={1480}
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>

			{ !isWideVersion && (

				<IconButton 
					aria-label="Abrir menu"
					variant="unstyled"
					fontSize="24" 
					icon={<Icon as={RiMenuLine} />}
					onClick={onOpen}
					mr="2"
				></IconButton> 
			) }

			<Logo />
			

			{ isWideVersion && <SearchBox /> }

			<Flex
				align="center"
				ml="auto"
			>
			
				<NotificationsNav />
				<Profile showProfileData={isWideVersion} />

			</Flex>
		</Flex>
	)
}