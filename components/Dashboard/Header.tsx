import styled from 'styled-components'
import { Profile } from '../Icons'

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Wellcome>
        <div className="Logo-box">
          <div className="circle">
            <Profile />
          </div>
          <p className="Logo-title">کاربر 45678 خوش آمدید</p>
          <p className="Logo-title">امتیاز شما : 57</p>
        </div>
      </Wellcome>
      <Logo>
        <div className="Logo-box">
          <p className="Logo-title">با مادر رو به آینده</p>
          <img src="/images/logo.png" className="Logo-image" />
        </div>
      </Logo>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  .Logo-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .Logo-title {
    font-size: 20px;
    text-shadow: 1px 1px 5px #333;
  }
  .Logo-image {
    width: 130px;
    height: 80px;
  }
`
const Wellcome = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding-left: 25px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .circle {
    width: 60px;
    height: 60px;
    border: 3px solid #eee;
    border-radius: 50%;
    padding-left: 8px;
    padding-top: 8px;
    display: center;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px #333;
  }
  .Logo-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 25px;
  }
  .Logo-title {
    font-size: 20px;
    text-shadow: 1px 1px 5px #333;
  }
  .Logo-image {
    width: 130px;
    height: 80px;
  }
`
