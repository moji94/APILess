import { Layout, Login, Register, ForgetPass } from '@/components'
// import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="StyledComponent Test Card">
      <Login></Login>
      <Register></Register>
      <ForgetPass></ForgetPass>
    </Layout>
  )
}
