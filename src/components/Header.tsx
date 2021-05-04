import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
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
			<Text
				fontSize="3xl"
				fontWeight="bold"
				letterSpacing="tight"
				w="64"
			>
				Dashgo
				<Text as="span" ml="1" color="blue.500">.</Text>
			</Text>

			<Flex
				as="label"
				flex="1"
				py="4"
				px="6"
				ml="8"
				mx="auto"
				maxWidth={400}
				alignSelf="center"
				color="gray.200"
				position="relative"
				bg="gray.800"
				borderRadius="full"
			>
				<Input 
					color="gray.50"
					variant="unstyled"
					placeholder="Buscar na plataforma"
					_placeholder={{color: 'gray.400'}}
					px="4"
					mr="4"
				/>

				<Icon as={RiSearchLine} fontSize="20"/>

			</Flex>

		<Flex
			align="center"
			ml="auto"
		>
			<HStack 
				spacing="8" 
				mx="9" 
				pr="8" 
				py="1" 
				color="gray.300" 
				borderRightWidth={1} 
				borderColor="gray.700"
			>
				<Icon as={RiNotificationLine} fontSize="20" />
				<Icon as={RiUserAddLine} fontSize="20" />
			</HStack>

			<Flex align="center">
				<Box mr="4" textAlign="right">
					<Text>Gilberto Alves</Text>
					<Text color="gray.300" fontSize="small">alvesgilberto84@gmail.com</Text>
				</Box>

				<Avatar size="md" name="Gilberto Alves" src="https://github.com/GilbertoASJ.png" />
			</Flex>
		</Flex>

		</Flex>
	)
}