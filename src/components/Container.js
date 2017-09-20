import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${props => (props.purple ? '#482548' : '#fff')};
`

export default function Container(props) {
  return <Wrapper purple>{props.children}</Wrapper>
}
