import styled from 'styled-components'
import { HeaderComp } from './HeaderComp'

export const HomeHeader = (): JSX.Element => {
  return (
    <Container>
      <img src="./images/Banner.jpg" />
      <HeaderComp></HeaderComp>
    </Container>
  )
}

const Container = styled.div`
  width: 1240px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  img {
    width: 1200px;
    height: 700px;
  }
`
