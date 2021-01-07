import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Fairies</h2>
    <h2>and</h2>
    <h2>Elves's</h2>
    
    <Link
    style={{
      fontSize: `12px`,
      color: `whitesmoke`,
    }}
     to="/page-2/">Go to page 2</Link> <br />
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
