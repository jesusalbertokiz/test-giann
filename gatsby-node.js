/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ 
      node, 
      getNode, 
      basePath: 'pages' 
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const personajesTemplate = path.resolve(`./src/templates/personaje.js`);
  return graphql(`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/\/personajes\//"}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
    
  `)
  .then(result => {
    if (result.errors) throw result.errors;

    const personaje = result.data.allMarkdownRemark.edges;

    personaje.forEach((personaje, index) => {
      createPage({
        path: personaje.node.fields.slug,
        component: personajesTemplate,
        context: {
          slug: personaje.node.fields.slug,
          },
        });
      });
  

    });
  };


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
  
//   const blogTemplate = path.resolve(`./src/templates/blog.js`);
//   return graphql(`
  // {
  //   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/\/blog\//"}}) {
  //     edges {
  //       node {
  //         fields {
  //           slug
  //         }
  //         frontmatter {
  //           title
  //         }
  //       }
  //     }
  //   }
  // }
    
//   `)
//   .then(result => {
//     if (result.errors) throw result.errors;

//     const blog = result.data.allMarkdownRemark.edges;

//     blog.forEach((blog, index) => {
//       createPage({
//         path: blog.node.fields.slug,
//         component: blogTemplate,
//         context: {
//           slug: blog.node.fields.slug,
//           },
//         });
//       });
  
//       return null;
//     });
//   };


///////////////////////////////////////////


  ///////////////////////////////////////////////////////////////////
