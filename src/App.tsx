import * as React from 'react'

import './App.css'

import CheckList from './CheckList'

const items = [
  {
    id: '123',
    checked: true,
    text: 'Slå på takbelysningen'
  },
  {
    id: '234',
    checked: false,
    text: 'Starta datorn'
  },
]

export default function App() {
  return (
    <main className='session-checklist-app'>
      <CheckList items={ items } />
    </main>
  )
}
