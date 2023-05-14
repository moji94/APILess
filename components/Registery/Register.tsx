import styled, { css } from 'styled-components'
import { Phone, Code, Pass } from '@/components'
import { componentActivation, signupStages } from '@/stores/store'
import { useAtom } from 'jotai'

export const Register = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [dc, setDc] = useAtom(signupStages)
  // setAc('log')
  console.log(dc)
  return (
    <Container ac={ac} dc={dc}>
      <Logo>
        <img src="/images/logo.png" />
        <p className="title">ثبت نام</p>
      </Logo>
      <Phone></Phone>
      <Code></Code>
      <Pass></Pass>
    </Container>
  )
}

const Container = styled.div<{ ac: string; dc: string }>`
  width: 30%;
  height: 600px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 1px 1px 5px #333;
  margin-bottom: 10px;
  transition: all 150ms;
  ${({ ac }) =>
    ac === 'reg'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  ${({ dc }) =>
    dc !== 'code' && 'phone'
      ? css`
          transform: rotateY(360deg);
        `
      : css``};
  .doyou {
    margin-left: auto;
    margin-right: 60px;
    margin-top: 10px;
    cursor: pointer;
  }
  .forget {
    margin-left: auto;
    margin-right: 60px;
    margin-top: 10px;
    cursor: pointer;
  }
`
const Logo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
  img {
    width: 400px;
    height: 250px;
  }
  .title {
    font-size: 25px;
  }
`
