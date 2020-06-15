import * as React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;

  padding: .5rem 1rem;

  color: var(--primary);
  background: white;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export default function Header () {
  return (
    <Container>
      <h1>Session Checklist</h1>
    </Container>
  )
}
