import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-regular-svg-icons'

const Container = styled.form`
  display: flex;
  justify-content: space-between;

  padding: .5rem 1rem;

  background: white;

  box-shadow: 0 0 .125rem rgba(0, 0, 0, 0.06),
    0 .125rem .125rem rgba(0, 0, 0, 0.12);

  input {
    flex: 1;
  }
`

interface ICreateItemInputProps {
  handleCreate(text: string): void
}

export default function CreateItemInput ({ handleCreate }: ICreateItemInputProps) {
  const [ text, setText ] = React.useState('')

  function onChange (event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function onSubmit (event: React.FormEvent) {
    if (text.length > 0) {
      handleCreate(text)
      setText('')
    }

    event.preventDefault()
  }

  return (
    <Container onSubmit={ onSubmit }>
      <input
        type='text'
        onChange={ onChange }
        value={ text }
        placeholder='Ex. "Tänd lamporna"'
      />
      <button type='submit'>
        <FontAwesomeIcon icon={ faPlus } />
      </button>
    </Container>
  )
}
