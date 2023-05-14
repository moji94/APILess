import styled from 'styled-components'

export const Card = (): JSX.Element => {
  return (
    <Container>
      <CardImage>
        <img src={'./images/drink.png'} />
      </CardImage>
      <Details>
        <p className="detail-title"> نوشیدنی</p>
        <p className="detail-price">18000تومان</p>
        <p className="detail-ORGprice">25000تومان</p>
        <p className="detail-discount">30% تخفیف</p>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 95%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 1px 1px 5px #333;
  border-radius: 10px;
  margin-bottom: 10px;
`
const CardImage = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100px;
    height: 100px;
  }
`
const Details = styled.div`
  width: calc(90% - 100px);
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  .detail-title {
    font-size: 20px;
    text-align: center;
    padding-right: 50%;
  }
  .detail-price {
    font-size: 18px;
    direction: rtl;
  }
  .detail-ORGprice {
    font-size: 15px;
    direction: rtl;
    text-decoration: line-through;
    color: #999;
  }
  .detail-discount {
    font-size: 15px;
    direction: rtl;
  }
`
