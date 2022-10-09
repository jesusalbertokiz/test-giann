import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      color: "#ADB9C7",
    },
    
  },
  palette: {
    type: "light",
    primary: {
      main: "#C51EFF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "#CCC",
      hint: "#7D7987",
    },
  },
  shape: {
    borderRadius: 20,
  },
})

export default theme
