
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'

export const RouteWrapper = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
