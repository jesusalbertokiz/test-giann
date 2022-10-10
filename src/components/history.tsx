import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const History = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
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
          <div style={{ width: "100%" }}>
            <Image
              alt="Unifree, la historia de la universidad mas aterradora del mundo"
              filename="university.png"
            />
          </div>
        </Grid>
      </Hidden>
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
          Unifree, la historia de la universidad mas aterradora del mundo
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Esta universidad fue pionera en el campo de la mutación genética en una epoca
          donde la humanidad casi se extingue por culpa de un virus letal. Fue gracias
          a los genes de algunos animales que eran inmunes a la enfermedad lo que hizo que el 
          campo de la medicina y el mundo como se conocia cambiara radicalmente.
        </Typography>
        <Button variant="outlined" href="/history-unifree" color="primary" size="large">
          Ver Historia
        </Button>
      </Grid>
    </Grid>
  )
}
export default History
