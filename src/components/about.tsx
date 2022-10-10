import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const About = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h4" color="inherit">
          Artegiann es más que una artista...
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Giannela se siente muy vinculada con su trabajo porque al crear lo hace con pasión,
          todos sus trabajos llevan una parte de su escencia y de lo que sienta en el momento de crearlos,
          Haciendolos unicos y especiales.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/about-me"
          
        >
          Conoce más Sobre Giannela
        </Button>
      </Grid>

      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "70%" }}>
            <Image
              alt="VGiannela, una artista única"
              filename="giannela.png"
            />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default About
