import styled from 'styled-components'
import { Shop } from '../Icons'
import { Card } from '@/components'

export const Special = (): JSX.Element => {
  return (
    <Container>
      <OfferTitle>
        <Shop />
        <p className="offer-text">پیشنهادات ویژه</p>
      </OfferTitle>
      <OfferBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </OfferBox>
    </Container>
  )
}
const Container = styled.div`
  width: 25%;
  height: calc(100% - 100px);
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 1px 1px 5px #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const OfferTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .offer-text {
    font-size: 20px;
    padding-right: 20px;
    color: rgb(255, 0, 208);
    text-shadow: 1px 1px 5px #333;
  }
`
const OfferBox = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  } */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
`
