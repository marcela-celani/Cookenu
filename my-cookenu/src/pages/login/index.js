import React from 'react'
import { useForm } from '../../hooks'
import {
  FormContainer,
  LoginPageContainer
} from './styled'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'

export const LoginPage = ({theme}) => {

  const [ form, onChangeInputs, clearInputs ] = useForm({
    email: '',
    password: ''
  })
  

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={false}>
            <FormLabel>Email</FormLabel>
            <Input
              name='email'
              type='email' value={form.email}
              onChange={onChangeInputs}
              placeholder='Digite seu email' />
              {/* {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
              ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
              )} */}
               <Button type='submit' variant='form'>Enviar</Button>
          </FormControl>
        </form>
      </FormContainer>
    </LoginPageContainer>
  )
}