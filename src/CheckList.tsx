import * as React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import ListItem, { IListItem } from './ListItem'
import CreateItemInput from './CreateItemInput'

import { useStickyState } from './hooks'
import { sessionStorageKey } from './storage'

const List = styled.ul``

export default function CheckList () {
  const [ listItems, setListItems ] = useStickyState([], sessionStorageKey)
  
  function handleCheck (id: string) {
    const newListItems = listItems.map(listItem => {
      if (listItem.id === id) {
        return {
          ...listItem,
          checked: !listItem.checked
        }
      }

      return listItem
    })

    setListItems(newListItems)
  }

  function handleDelete (id: string) {
    const newListItems = listItems.filter(listItem => listItem.id !== id)

    setListItems(newListItems)
  }

  function handleCreate (text: string) {
    const listItem: IListItem = {
      id: Date.now().toString(),
      checked: false,
      text
    }

    const newListItems = Array.from(listItems)
    newListItems.push(listItem)

    setListItems(newListItems)
  }

  function handleDeleteAll () {
    setListItems([])
  }

  function handleUncheckAll () {
    const newListItems = listItems.map(({ id, text }) => ({ id, text, checked: false }))

    setListItems(newListItems)
  }

  function onDragEnd (result: DropResult) {
    const { destination, source } = result

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const item = listItems[source.index]

    const newListItems = Array.from(listItems)
    newListItems.splice(source.index, 1)
    newListItems.splice(destination.index, 0, item)

    setListItems(newListItems)
  }

  return (
    <>
      <DragDropContext onDragEnd={ onDragEnd }>
        <Droppable droppableId={ 'list-items' }>
          { provided => (
            <List { ...provided.droppableProps } ref={ provided.innerRef }>
              {
                listItems.map((item, index) =>
                  <ListItem
                    key={ item.id }
                    item={ item }
                    index={ index }
                    handleCheck={ handleCheck }
                    handleDelete={ handleDelete }
                  />
                )
              }
              { provided.placeholder }
            </List>
          ) }
        </Droppable>
      </DragDropContext>
      <CreateItemInput handleCreate={ handleCreate } />
      {
        listItems.length > 0 && <button type='button' onClick={ handleDeleteAll }>Rensa lista</button>
      }
      {
        listItems.length > 0 && <button type='button' onClick={ handleUncheckAll }>Bocka av alla</button>
      }
    </>
  )
}
