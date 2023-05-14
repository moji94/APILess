import styled, { css } from 'styled-components'
import { useAtom } from 'jotai'
import { componentActivation } from '@/stores/store'
import Head from 'next/head'

interface Props {
  children: any
  title: string
}

export const DashboardLayout = ({ children, title }: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <div className="kook">
          <MainContent>{children}</MainContent>
        </div>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  background-image: url('./images/madarMall.jpg');
  background-size: contain;
  .kook {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: brightness(80%) blur(15px);
  }
`
const MainContent = styled.div`
  width: 90%;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 150ms;
  background-color: rgba(255, 255, 255, 0.15);
  /* margin-top: 50px; */
  /* margin-bottom: 20px; */
  border-radius: 10px;
`
