import styled from 'styled-components'

export const HeaderComp = (): JSX.Element => {
  return (
    <Container>
      <Wrapper className="wrapper">
        <div className="logo">
          <img className="img-logo" src="./images/HomeLogo.png" />
        </div>
        <div className="buttons">
          <p className="but">خانه</p>
          <p className="but">خرید</p>
          <p className="but">تجاری</p>
          <p className="but">رفاهی</p>
          <p className="but">تفریحی</p>
          <p className="but">فرهنگی</p>
        </div>
        <div className="login">
          <input type="button" className="button-box" value={' ثبت نام'} />

          <p className="enter">ورود</p>
        </div>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 1000px;
  height: 50px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  position: relative;
  .logo {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    .img-logo {
      width: 100px;
      height: 50px;
    }
  }
  .buttons {
    width: 400px;
    height: 100%;
    position: absolute;
    right: 180px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    .but {
      color: #333;
    }
  }
  .login {
    width: 170px;
    height: 100%;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button-box {
      width: 100px;
      height: 30px;
      border-radius: 10px;
      border: none;
      background-color: #6b2180;
      font-family: 'Vazir';
      font-size: 15px;
      color: white;
    }
    .enter {
      color: #6b2180;
    }
  }
`
