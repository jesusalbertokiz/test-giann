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
import SEO from "../components/seo"
import Hero from "../components/hero"
// import Services from "../components/services"
// import AboutPanel from "../components/about-panel"
// import Testimonials from "../components/testimonials"
// import Articles from "../components/articles"
// import AppsPanel from "../components/apps-panel"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import { graphql } from 'gatsby';

export const query = graphql`
query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      description
      date
    }
  }
}
`;


const IndexPage = (props) => {
  const post = props.data.markdownRemark;
  const { title, description, date } = post.frontmatter;
  return(

  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        {/* <Services />
        <AboutPanel />
        <AppsPanel /> */}
        {/* <Testimonials /> */}
        {/* <Articles /> */}
        <div>
          <h1>{title}</h1>
          <i>{description}</i> - <small>{date}</small>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
  )
}


export default IndexPage