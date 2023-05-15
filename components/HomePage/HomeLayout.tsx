import styled from 'styled-components'
import Head from 'next/head'

interface Props {
  children: any
  title: string
}

export const HomeLayout = ({ children, title }: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <MainContent>{children}</MainContent>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const MainContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 150ms;
`
