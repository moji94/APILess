import { DashboardLayout, Factor, Header, Special } from '@/components'
import styled from 'styled-components'

export default function Dashboard() {
  return (
    <DashboardLayout title="StyledComponent Dashboard">
      <Header></Header>
      <Wrapper>
        <Factor></Factor>
        <Special></Special>
      </Wrapper>
    </DashboardLayout>
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
