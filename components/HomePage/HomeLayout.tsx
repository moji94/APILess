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
`
const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: all 150ms;
`
