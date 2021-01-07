import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Welcome to the enchanting
    world of Fairy Wood.
    Fairies and Elves at Fairy
    Wood would love your help
    to renew the woodland,
    maintain it, and
    attract wildlife.</h2>
    <h2>Watch the video to see how
    they propose the wood will
    look in winter, spring,
    summer, and autumn.</h2>
    <Link 
    style={{
      fontSize: `12px`,
      color: `whitesmoke`,
    }}
    to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
