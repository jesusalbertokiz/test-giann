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
<iframe
src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/nft-drop.html?contract=0x4E17727B7F0F0037b8249d41861dACD153b28313&chainId=137"
width="600px"
height="600px"
style={{maxWidth:"100%"}}
frameborder="0"
></iframe>
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
