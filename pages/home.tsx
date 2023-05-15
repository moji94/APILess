import { HomeHeader, HomeLayout, Rhombuses } from '@/components'
import styled from 'styled-components'

export default function HomePage() {
  return (
    <HomeLayout title="StyledComponent HomePage">
      <Wrapper>
        <HomeHeader></HomeHeader>
        <Rhombuses></Rhombuses>
      </Wrapper>
    </HomeLayout>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000;
`
