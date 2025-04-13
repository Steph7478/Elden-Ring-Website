import Footer from '../../common/footer/footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
