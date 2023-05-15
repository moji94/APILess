import { HomeHeader, HomeLayout } from '@/components'
import styled from 'styled-components'

export default function HomePage() {
  return (
    <HomeLayout title="StyledComponent HomePage">
      <Wrapper>
        <HomeHeader></HomeHeader>
      </Wrapper>
    </HomeLayout>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #fff;
`
