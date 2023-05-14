import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import { componentActivation, signupStages } from '@/stores/store'
import { useAtom } from 'jotai'

interface Props {
  children: any
  title: string
}

export const Layout = ({ children, title }: Props): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [dc, setDc] = useAtom(signupStages)
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <div className="kook">
          <MainContent ac={ac} dc={dc}>
            {children}
          </MainContent>
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
    height: 100%;
    backdrop-filter: brightness(80%) blur(15px);
  }
`
const MainContent = styled.div<{ ac: string; dc: string }>`
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: all 150ms;

  ${({ ac }) =>
    ac !== 'log'
      ? css`
          transform: rotateY(360deg);
        `
      : css``}
`
