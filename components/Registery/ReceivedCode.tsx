import styled, { css } from 'styled-components'
import { componentActivation, signupStages } from '@/stores/store'
import { useAtom } from 'jotai'

export const Code = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [dc, setDc] = useAtom(signupStages)
  return (
    <Container dc={dc}>
      <div className="entery">
        <p className="mobile-title">:کد تایید</p>
        <input
          className="mobile-input"
          placeholder="...کلیک کنید"
          type="number"
        />
      </div>
      <Buttons>
        <input
          className="register"
          type="button"
          value="ادامه"
          onClick={() => {
            setAc('reg')
            setDc('pass')
          }}
        />
        <p
          className="back"
          onClick={() => {
            setAc('reg')
            setDc('phone')
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
    dc === 'code'
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
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  padding-top: 60px;
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
