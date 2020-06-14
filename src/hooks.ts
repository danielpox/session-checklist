import { useState, useEffect } from 'react'
import { IListItem } from './ListItem'
import { deserializeListItems, serializeListItems } from './storage'

export function useStickyState (defaultValue: IListItem[], key: string): [IListItem[], (item: IListItem[]) => void] {
  const [ value, setValue ] = useState<IListItem[]>(() => {
    const stickyValue = window.sessionStorage.getItem(key)

    if (stickyValue === null) return defaultValue

    const parsedValue = JSON.parse(stickyValue)
    const deserializedValue = deserializeListItems(parsedValue)

    return deserializedValue
  })

  useEffect(() => {
    const serializedValue = serializeListItems(value)

    window.sessionStorage.setItem(key, JSON.stringify(serializedValue))
  }, [key, value])

  return [ value, setValue ]
}
