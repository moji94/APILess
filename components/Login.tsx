import styled, { css } from 'styled-components'
import { useAtom } from 'jotai'
import { componentActivation, signupStages } from '@/stores/store'
import router from 'next/router'

export const Login = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [dc, setDc] = useAtom(signupStages)
  // setAc('log')
  return (
    <Container ac={ac}>
      <Logo>
        <img src="/images/logo.png" />
      </Logo>
      <Mobile>
        <div className="entery">
          <p className="mobile-title">:موبایل</p>
          <input className="mobile-input" placeholder="...کلیک کنید" type="" />
        </div>
        <div className="entery">
          <p className="select">:رمزعبور</p>
          <input
            className="mobile-input select"
            placeholder="...کلیک کنید"
            type="password"
          />
        </div>
      </Mobile>
      <Buttons>
        <div className="register-box">
          <input
            className="register"
            type="button"
            value="ورود"
            onClick={() => {
              router.push('/dashboard')
              setAc('dash')
            }}
          />
        </div>
        <div className="ques-box">
          <p
            className="doyou"
            onClick={() => {
              setAc('reg')
              setDc('phone')
            }}
          >
            هنوز ثبت نام نکرده اید؟
          </p>
          <p
            className="forget"
            onClick={() => {
              setAc('forg')
            }}
          >
            رمز عبور خود را فراموش کرده اید؟
          </p>
        </div>
      </Buttons>
    </Container>
  )
}

const Container = styled.div<{ ac: string }>`
  width: 30%;
  height: 600px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 1px 1px 5px #333;
  justify-content: flex-start;
  margin-bottom: 10px;
  transition: all 500ms;

  ${({ ac }) =>
    ac === 'log'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};
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
const Mobile = styled.div`
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  .entery {
    width: 95%;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .select {
    font-size: 17px;
    color: rgb(0, 105, 150);
  }
  .mobile-title {
    font-size: 17px;
    color: rgb(0, 105, 150);
  }
  .mobile-input {
    width: 70%;
    height: 95%;
    border: none;
    outline: none;
    color: rgb(0, 105, 150);
    background-color: rgba(0, 0, 0, 0);
    font-family: 'Vazir';
    font-size: 15px;
    direction: ltr;
    padding: 0px 10px 0px 10px;
    margin-left: 10px;
    ::placeholder {
      color: rgba(246, 247, 248, 1);
    }
  }
`
const Buttons = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .register {
    width: 200px;
    height: 50px;
    background-color: rgba(255, 0, 247, 0.5);
    font-family: 'Vazir';
    font-size: 25px;
    color: #333;
    border-radius: 10px;
    color: white;
    border: none;
    box-shadow: 1px 1px 5px #333;
    cursor: pointer;
  }
  .register-box {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
    padding-top: 50px;
  }
  .ques-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 50px;
    .doyou {
      cursor: pointer;
    }
    .forget {
      cursor: pointer;
    }
  }
`
