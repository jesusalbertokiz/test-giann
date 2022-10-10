import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../../theme"
import Image from "../../components/image"
import { graphql } from 'gatsby';

export const query = graphql`
query PostUniversidad {
  markdownRemark(frontmatter: {slug: {eq: "history-unifree"}}) {
    html
    frontmatter {
      title
      image
    }
  }
}

`;


const IndexPage = (props) => {
  const post = props.data.markdownRemark;
  const { title,  image } = post.frontmatter;

     return(

  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={title} />
        <Typography style={{marginTop:"3rem", textAlign:"center", fontSize:"3rem"}} variant="h1">{title}</Typography>
        <div style={{height:"100%", maxWidth: "400px", margin:"0 auto"}}>
            <Image
              alt="Unifree, la historia de la universidad mas aterradora del mundo"
              filename={image}
            />
          </div>
        <div style={{color:"#ADB9C7"}} dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
  )
}


export default IndexPage