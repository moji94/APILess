import styled from 'styled-components'

export const Rhombuses = (): JSX.Element => {
  return (
    <Container>
      <p className="title">مجموعه های مادر</p>
      <div className="rhombus">
        <img src="./images/buling.jpg" />
        <div className="background blue"></div>
        <p>سالن بولینگ</p>
      </div>
      <div className="rhombus">
        <img src="./images/hotel.jpeg" />
        <div className="background orange"></div>
        <p>هتل</p>
      </div>
      <div className="rhombus">
        <img src="./images/gamecity.jpeg" />
        <div className="background sky"></div>
        <p>شهربازی</p>
      </div>
      <div className="rhombus">
        <img src="./images/goldmarket.jpeg" />
        <div className="background gold"></div>
        <p>بازار طلا</p>
      </div>
      <div className="rhombus">
        <img src="./images/cinema.jpeg" />
        <div className="background green"></div>
        <p>سینما</p>
      </div>
      <div className="rhombus">
        <img src="./images/foodcourt.jpg" />
        <div className="background red"></div>
        <p>فودکورت</p>
      </div>
      <div className="rhombus">
        <img src="./images/clenic.jpg" />
        <div className="background purple"></div>
        <p>سرای بانوان</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding-left: 70px;
  padding-right: 70px;

  .title {
    position: absolute;
    top: 50px;
    color: #57586b;
    font-family: 'Vazir';
    font-size: 22px;
    text-shadow: 1px 1px 3px #57586b;
  }
  .rhombus {
    width: 180px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skewX(-20deg);
    overflow: hidden;
    position: relative;
    box-shadow: 4px 4px 4px #57586b;
    border-left: 4px solid #fff;
    img {
      width: 600px;
      height: 300px;
      transform: skewX(20deg);
      filter: grayscale(1);
    }
    p {
      position: absolute;
      transform: skewX(20deg);
      color: #fff;
      font-family: 'Vazir';
      font-size: 22px;
      text-shadow: 3px 3px 3px #333;
    }
    .background {
      width: 100%;
      height: 100%;
      background-color: #333;
      position: absolute;
    }
    .green {
      background-color: #18ef54;
      opacity: 0.2;
    }
    .purple {
      background-color: #ef18e6;
      opacity: 0.2;
    }
    .blue {
      background-color: #3300ff;
      opacity: 0.2;
    }
    .orange {
      background-color: #ff6b00;
      opacity: 0.2;
    }
    .sky {
      background-color: #00ffff;
      opacity: 0.2;
    }
    .gold {
      background-color: #efac18;
      opacity: 0.2;
    }
    .red {
      background-color: #ef1818;
      opacity: 0.2;
    }
  }
`
