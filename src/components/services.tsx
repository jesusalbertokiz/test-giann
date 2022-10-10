import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "Hari-Kiufa.jpg",
      title: "Hari Kiufa",
      url:"/hari-kiufa",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
    },
    {
      id: 2,
      image: "Alnika-Scott.jpg",
      title: "Alnika Scott",
      url:"/alnika-scott",
      description:
        "Buy your medicines with our mobile application with a simple delivery system.",
    },
    {
      id: 3,
      image: "Dominic-Rollins.jpg",
      title: "Dominic Rollins",
      url:"/dominic-rollins",
      description:
        "Free consultation with our trusted doctors and get the best recommendations.",
    },
    {
      id: 4,
      image: "Grecia-Singala.jpg",
      title: "Grecia Singala",
      url:"/grecia-singala",
      description:
        "Free consultation with our trusted doctors and get the best recommendations.",
    },
    {
      id: 5,
      image: "Miguel-Angel-Ortiz.jpg",
      title: "Miguel Ángel Ortiz",
      url:"/miguel-angel-ortiz",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family.",
    },
    {
      id: 6,
      image: "Tay-DBron.jpg",
      title: "Tay D'Bron",
      url:"/tay-dbron",
      description: "Track and save your medical history and health data.",
    },
    
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Descubre</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          Aca podras todos los personajes de Unifree. Este es mi ultimo proyecto al cual 
          le he dedicado mucho tiempo y amor. La historia de cada uno de los personajes es unica y bizarra.
          Muchos de ellos han vivido cosas inimaginables y es por eso que cada uno es muy especial.
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button variant="outlined" href="/discover" color="primary" size="large">
          Ir a Descubrir
        </Button>
      </Grid>
    </Grid>
  )
}
export default Services
