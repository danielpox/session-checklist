import { IListItem } from './ListItem'

export const sessionStorageKey = 'session-checklist.items'

type SerializedListItem = Omit<IListItem, 'checked'>

export function serializeListItems (listItems: IListItem[]): SerializedListItem[] {
  const serializedListItems = listItems.map(({ id, text }) => ({ id, text }))

  return serializedListItems
}

export function deserializeListItems (serializedListItems: SerializedListItem[]): IListItem[] {
  const listItems = serializedListItems.map(({ id, text }) => ({ id, text, checked: false }))

  return listItems
}
