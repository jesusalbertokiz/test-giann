import React from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Image from "./image"

interface IProps {
  article: Article
}

interface Article {
  title: string
  image: string
  description: string
  url: string
}

const ArticleCard = ({ article, ...props }: IProps) => {
  return (
    <Card style={{backgroundColor: "#36414C", minWidth:"230px"}}>
      <CardMedia image={article.image}>
        <Image alt={article.title} filename={article.image} />
      </CardMedia>
      <CardContent style={{ textAlign: "start" }}>
        <Typography style={{ textAlign: "center", color:"#fff", margin:"0  0 25px 0"}} variant="h5">
          {article.title}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions style={{ width: "90%",margin:"0  0 25px 0", justifyContent:"center" }}>
        <Button variant="contained" size="small" color="primary" href={article.url}>
          Leer Más         
        </Button>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
