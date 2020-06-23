import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
max-width:1280px;
margin:auto;
padding: 0 1rem;
`

export function Wrapper({children}) {
  return (
    <WrapperStyle>
    {children}
    </WrapperStyle>
  )
}