import * as React from 'react'
import styled from 'styled-components'
import { version } from '../package.json'

import './App.css'

import CheckList from './CheckList'
import Header from './Header'

const Footer = styled.footer`
  margin-top: 1rem;

  text-align: center;
  color: #888;
`

export default function App() {
  return (
    <main className='session-checklist-app'>
      <Header />
      <CheckList />
      <Footer>
        <p><small>v{ version }</small></p>
      </Footer>
    </main>
  )
}
