import { Box, Text, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Td, Th, Checkbox } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						
						<Heading size="lg" fontWeight="normal">Usuários</Heading>
						<Button 
							as="a" 
							size="sm" 
							fontSize="sm" 
							colorScheme="blue" 
							leftIcon={<Icon as={RiAddLine} fontSize="20" />}
						>
							Criar novo usuário
						</Button>

					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" w="8">
									<Checkbox colorScheme="blue" />
								</Th>
								<Th>Usuário</Th>
								<Th>Data de cadastro</Th>
								<Th w="8"></Th>
							</Tr>
						</Thead>

						<Tbody>
							<Tr>
								<Td px="6">
									<Checkbox colorScheme="blue" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Gilberto Alves</Text>
										<Text fontSize="sm" color="gray.300">alvesgilberto84@gmail.com</Text>
									</Box>
								</Td>
								<Td>05 de Abril, 2021</Td>
								<Td>
									<Button 
										as="a" 
										size="sm" 
										fontSize="sm" 
										colorScheme="teal" 
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
									>
											Editar
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</Box>
			</Flex>
		</Box>
	)
}