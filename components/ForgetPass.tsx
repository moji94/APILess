import styled, { css } from 'styled-components'
import { useAtom } from 'jotai'
import { componentActivation } from '../stores/store'

export const ForgetPass = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  return (
    <Container ac={ac}>
      <Logo>
        <img src="/images/logo.png" />
        <p className="title">فراموش کردن رمزعبور</p>
      </Logo>
      <Mobile>
        <div className="entery">
          <p className="mobile-title">:رمز عبور جدید</p>
          <input
            className="mobile-input"
            placeholder="...کلیک کنید"
            type="password"
          />
        </div>
        <div className="entery">
          <p className="select">:تکرار رمزعبور جدید</p>
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
            value="تایید"
            onClick={() => {
              setAc('log')
            }}
          />
        </div>
        <p
          className="back"
          onClick={() => {
            setAc('log')
          }}
        >
          بازگشت
        </p>
      </Buttons>
    </Container>
  )
}

const Container = styled.div<{ ac: string }>`
  width: 30%;
  height: 600px;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 1px 1px 5px #333;
  border-radius: 10px;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 10px;
  transition: all 500ms;
  ${({ ac }) =>
    ac === 'forg'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
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
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  .mobile-title {
    font-size: 15px;
    color: rgb(0, 105, 150);
  }
  .select {
    font-size: 12px;
    color: rgb(0, 105, 150);
  }
  .mobile-repeat {
    font-size: 13px;
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
      color: rgba(246, 247, 248, 0.7);
    }
  }
  /* input:focus {
    background-color: rgba(255, 255, 255, 0.1);
  } */
`
const Buttons = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 50px;
  align-items: center;
  .register {
    width: 200px;
    height: 50px;
    background-color: rgba(255, 0, 247, 0.5);
    box-shadow: 1px 1px 5px #333;
    font-family: 'Vazir';
    font-size: 25px;
    color: #333;
    border-radius: 10px;
    color: white;
    border: none;
    cursor: pointer;
  }
  .register-box {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
  }
  .back {
    color: #eee;
    cursor: pointer;
  }
`
