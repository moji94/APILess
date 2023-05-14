import { HomeLayout } from '@/components'
import styled from 'styled-components'

export default function HomePage() {
  return (
    <HomeLayout title="StyledComponent Dashboard">
      <div></div>
    </HomeLayout>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 10px;
`
