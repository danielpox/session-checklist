import * as React from 'react'

import ListItem, { IListItem } from './ListItem'

interface ICheckListProps {
  items: IListItem[]
}

export default function CheckList ({ items }: ICheckListProps) {
  const [ listItems, setListItems ] = React.useState<IListItem[]>(items)
  
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

  return (
    <ul>
      {
        listItems.map(item =>
          <ListItem
            key={ item.id }
            item={ item }
            handleCheck={ handleCheck }
            handleDelete={ handleDelete }
          />
        )
      }
    </ul>
  )
}
