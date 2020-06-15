import * as React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

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

const Item = styled.li``

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
          <label>
            <input type='checkbox' checked={ item.checked } onChange={ onChange } />
            <span className='text'>{ item.text }</span>
            <button type='button' onClick={ onDelete }>&times;</button>
          </label>
        </Item>
      ) }
    </Draggable>
  )
}
