import styled, { css } from 'styled-components'
import { componentActivation, signupStages } from '@/stores/store'
import { useAtom } from 'jotai'

export const Pass = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [dc, setDc] = useAtom(signupStages)
  return (
    <Container dc={dc}>
      <div className="entery">
        <p className="mobile-title">:رمزعبور</p>
        <input
          className="mobile-input select"
          placeholder="...کلیک کنید"
          type="password"
        />
      </div>
      <div className="entery">
        <p className="select">:تکرار رمزعبور</p>
        <input
          className="mobile-input select"
          placeholder="...کلیک کنید"
          type="password"
        />
      </div>
      <Buttons>
        <input className="register" type="button" value="تایید" />
        <p
          className="back"
          onClick={() => {
            setAc('reg')
            setDc('code')
          }}
        >
          بازگشت
        </p>
      </Buttons>
    </Container>
  )
}
const Container = styled.div<{ dc: string }>`
  width: 80%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  ${({ dc }) =>
    dc === 'pass'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  .entery {
    width: 95%;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  .mobile-title {
    font-size: 17px;
    color: rgb(0, 105, 150);
  }
  .select {
    font-size: 15px;
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
`
const Buttons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-right: 10px;
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
  .back {
    color: #eee;
    cursor: pointer;
  }
`
