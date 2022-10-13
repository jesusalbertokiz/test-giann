// import React from 'react';
// import { graphql } from 'gatsby';

// export const query = graphql`
// query PostQuery($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug } }) {
//     html
//     frontmatter {
//       title
//       description
//       date
//     }
//   }
// }
// `;

// export default function BlogPost(props) {
//   const post = props.data.markdownRemark;
//   const { title, description, date } = post.frontmatter;
//   return (
//     <div>
//       <h1>{title}</h1>
//       <i>{description}</i> - <small>{date}</small>
//       <div dangerouslySetInnerHTML={{ __html: post.html }} />
//     </div>
//   );
// }

import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import Services from "../components/services"
// import AboutPanel from "../components/about-panel"
// import Testimonials from "../components/testimonials"
// import Articles from "../components/articles"
// import AppsPanel from "../components/apps-panel"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../theme"
import Image from "../components/image"
import { graphql } from 'gatsby';

export const query = graphql`
query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
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
        <Seo title={title} />
	     <Typography style={{marginTop:"3rem", textAlign:"center", fontSize:"3rem"}} variant="h1">{title}</Typography>
        <div style={{height:"100%", maxWidth: "400px", margin:"0 auto"}}>
            <Image
              alt="Unifree, la historia de la universidad mas aterradora del mundo"
              filename={image}
            />
          </div>
        <Typography style={{color:"#ADB9C7"}} dangerouslySetInnerHTML={{ __html: post.html }}></Typography>
      <iframe
src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/nft-drop.html?contract=0x4E17727B7F0F0037b8249d41861dACD153b28313&chainId=137"
width="600px"
height="600px"
style={{maxWidth:"100%"}}
frameborder="0"
></iframe>
	     </Layout>
    </ThemeProvider>
  </React.Fragment>
  )
}


export default IndexPage
