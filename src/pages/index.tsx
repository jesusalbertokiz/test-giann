import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import History from "../components/history"
import Articles from "../components/articles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import About from "../components/about"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Services />
        <History />
        <About />
        {/* <Testimonials /> */}
        <Articles />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
