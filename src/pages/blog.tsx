
// import Hero from "../components/hero"
// import Services from "../components/services"
// import AboutPanel from "../components/about-panel"
// import AppsPanel from "../components/apps-panel"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <h1>Todos los blogs aca</h1>
        {/* <Hero />
        <Services />
        <AboutPanel />
        <AppsPanel />
        <Testimonials /> */}
        <Articles />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
