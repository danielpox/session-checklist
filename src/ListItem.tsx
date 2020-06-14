import * as React from 'react'

export interface IListItem {
  id: string
  checked: boolean
  text: string
}

export interface IListItemProps {
  item: IListItem
  handleClick (id: string): void
}

export default function ListItem ({ item, handleClick }: IListItemProps) {
  function onChange () {
    handleClick(item.id)
  }

  return (
    <li>
      <label>
        <input type='checkbox' checked={ item.checked } onChange={ onChange } />
        <span className='text'>{ item.text }</span>
      </label>
    </li>
  )
}
