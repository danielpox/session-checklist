import * as React from 'react'

interface ICreateItemInputProps {
  handleCreate(text: string): void
}

export default function CreateItemInput ({ handleCreate }: ICreateItemInputProps) {
  const [ text, setText ] = React.useState('')

  function onChange (event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function onSubmit (event: React.FormEvent) {
    handleCreate(text)
    setText('')

    event.preventDefault()
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type='text'
        onChange={ onChange }
        value={ text }
        placeholder='Ex. "Tänd lamporna"'
      />
      <button type='submit'>+</button>
    </form>
  )
}
