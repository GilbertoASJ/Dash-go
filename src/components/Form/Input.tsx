import { Flex, Input as ChakraInput, Button, Stack, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
	return (
		<FormControl>
			{ !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

			<ChakraInput 
				id={name}
				name={name}	
				type="email"	
				bgColor="gray.900"	
				variant="filled"	
				_hover={{	
					bgColor: "gray.900"	
				}} 	
				size="lg"	
				ref={ref}
				{...rest}
			/>
		</FormControl>
	);
}

export const Input = forwardRef(InputBase)