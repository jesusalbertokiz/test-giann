import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"

const Hero = () => {
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
        <Typography variant="h4" color="inherit" style={{ marginBottom: 20 }}>
          Unifree, la universidad más perturbadora del mundo
        </Typography>

        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          Esta universidad guarda un secreto oscuro atras de sus estudiantes, cada uno con una historia diferente, más extraña y bizarra que otra.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Ver más...
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

        </Grid>
      </Hidden>
    </Grid>
  )
}
export default Hero
