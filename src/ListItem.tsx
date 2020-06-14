import * as React from 'react'

export interface IListItem {
  id: string
  checked: boolean
  text: string
}

export interface IListItemProps {
  item: IListItem
  handleCheck (id: string): void
  handleDelete (id: string): void
}

export default function ListItem ({ item, handleCheck, handleDelete }: IListItemProps) {
  function onChange () {
    handleCheck(item.id)
  }

  function onDelete () {
    handleDelete(item.id)
  }

  return (
    <li>
      <label>
        <input type='checkbox' checked={ item.checked } onChange={ onChange } />
        <span className='text'>{ item.text }</span>
        <button type='button' onClick={ onDelete }>&times;</button>
      </label>
    </li>
  )
}
