import { NextPage } from "next"

import Layout from "../heimdall/layout/Layout"
import ReactPlayerDemo from "../heimdall/components/ReactPlayer/ReactPlayerDemo"

const DefaultPage: NextPage = () => {
  return (
    <Layout>
      <>
        <div style={{ display: "block", margin: "auto" }}>
          <ReactPlayerDemo />
        </div>
      </>
    </Layout>
  )
}
export default DefaultPage
