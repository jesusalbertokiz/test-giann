import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
// import Button from "@material-ui/core/Button"
// import FacebookIcon from "@material-ui/icons/Facebook"
// import TwitterIcon from "@material-ui/icons/Twitter"
// import InstagramIcon from "@material-ui/icons/Instagram"


const Footer = () => {
  const footerLinks = [
    {
      title: "Recursos",
      items: [
        { displayText: "Blog", url: "/blog" },
        {
          displayText: "Descubrir",
          url: "/discover",
        },
      ],
    },
    {
      title: "Artista",
      items: [
        { displayText: "Sobre Mi", url: "/about-me" },
        { displayText: "Contactame", url: "/contact" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          justify="center"
          style={{
            margin: `auto`,
            maxWidth: 950,
            minHeight: 200,
            color: "#FFF",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ 
              padding: 10,
         
              maxWidth: 300,
              color: "#FFF",}}
          >
            <Typography variant="h4" color="inherit">
              Artegiann
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Giannela es una artista Venezolana apasionada por el dibujo, la pintura y los NFT
            </Typography>
            <Typography variant="subtitle1" color="initial">
              ©Artegiann 2022. All rights reserved
            </Typography>
          </Grid>

          <Hidden xsDown>
            {footerLinks.map(footerMenu => (
              <Grid
                item
                xs={12}
                sm={2}
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                alignContent="center"
                key={footerMenu.title}
              >
                <Typography variant="subtitle1" color="inherit">
                  {footerMenu.title}
                </Typography>
                {footerMenu.items.map(link => (
                  <Link variant="subtitle1" color="initial" href={link.url} key={link.displayText}>
                    {link.displayText}
                  </Link>
                ))}
              </Grid>
            ))}
            {/* <Grid
              item
              xs={12}
              sm={2}
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
              alignContent="center"
              key="Redes Sociales"
            >
              <Typography variant="subtitle1" color="inherit">
                Redes Sociales
              </Typography>
              <Typography variant="subtitle1" color="initial">
                Puedes seguirme en mis redes sociales
              </Typography>
              <Grid 
              direction="row"
              >
                <Button>
                  <FacebookIcon variant="subtitle1" color="initial"/>
                </Button>
                <Button>
                  <TwitterIcon />
                </Button>
                <Button>
                  <InstagramIcon />
                </Button>
              </Grid>
            </Grid> */}
          </Hidden>
        </Grid>
      </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: 5,
            paddingRight: 5,
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
    
          </Typography>
          <Typography variant="body2" color="inherit">
  
          </Typography>
        </Grid>
      </Box>
    </React.Fragment>
  )
}
export default Footer
