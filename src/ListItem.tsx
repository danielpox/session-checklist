import * as React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/pro-regular-svg-icons'

export interface IListItem {
  id: string
  checked: boolean
  text: string
}

export interface IListItemProps {
  item: IListItem
  index: number
  handleCheck (id: string): void
  handleDelete (id: string): void
}

const Item = styled.li`
  display: flex;
  align-items: center;

  padding: .5rem 1rem;

  background: white;

  border-bottom: 1px solid #0002;

  input[type='checkbox'] {
    appearance: none;

    width: 1rem;
    height: 1rem;

    border: 2px solid #aaa;
    border-radius: .5rem;
  }
  input[type='checkbox']:checked {
    border-color: var(--primary);
    box-shadow: inset 2px 0 white, inset -2px 0 white, inset 0 -2px white, inset 0 2px white;
    background: var(--primary);
  }
  
  .text {
    flex: 2;
    margin: 0 1rem;
  }

  button {
    margin-left: auto;
  }
`

export default function ListItem ({ item, index, handleCheck, handleDelete }: IListItemProps) {
  function onChange () {
    handleCheck(item.id)
  }

  function onDelete () {
    handleDelete(item.id)
  }

  return (
    <Draggable draggableId={ item.id } index={ index }>
      { provided => (
        <Item { ...provided.draggableProps } { ...provided.dragHandleProps } ref={ provided.innerRef }>
          <input type='checkbox' id={ 'check-' + item.id } checked={ item.checked } onChange={ onChange } />
          <label htmlFor={ 'check-' + item.id } className='text'>{ item.text }</label>
          <button type='button' onClick={ onDelete } className='remove'>
            <FontAwesomeIcon icon={ faTrashAlt } />
          </button>
        </Item>
      ) }
    </Draggable>
  )
}
