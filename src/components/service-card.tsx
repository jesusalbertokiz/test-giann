import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import Button from "@material-ui/core/Button"


interface IProps {
  service: Service
}

interface Service {
  title: string
  image: string
  url: string
  description: string
}

const ServiceCard = ({ service, ...props }: IProps) => {
  return (
    <Card style={{backgroundColor: "#36414C"}}>
      <CardContent style={{ textAlign: "start", minHeight: 200 , display:"flex", flexDirection:"column"}}>
        <Image alt={service.title} filename={service.image} />
        <Typography style={{margin: "0 auto", color:"#fff", textAlign:"center"}} variant="h6">
          {service.title}
        </Typography>
        <Button style={{ width:"60%", margin:"0 auto"}} href={service.url} variant="contained" color="primary" size="small">
          Ver más
        </Button>
      </CardContent>
    </Card>
  )
}
export default ServiceCard
