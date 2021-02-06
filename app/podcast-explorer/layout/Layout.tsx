import { FC } from "react"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

interface ILayout {
  children?: JSX.Element[] | JSX.Element | string | null
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
