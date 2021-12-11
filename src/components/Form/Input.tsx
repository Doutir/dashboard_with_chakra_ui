import { 
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Stack
 } from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps{
  name: string;
  type: string;
  error?: FieldError;
  label?: string;
}

 const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({name,label,error=null,...rest},ref) => {
  return(
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        ref={ref}
        _hover={{
          bgColor:'grey.900'
        }}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>

      )}
  </FormControl>
  )
}

export const Input = forwardRef(InputBase)