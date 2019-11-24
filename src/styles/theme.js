import { createMuiTheme } from '@material-ui/core/styles';
import { red, deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: "#56494C",
        },
        secondary: {
          main: "#C2D3CD",
        },
        error: {
          main: red.A400,
        },
        type: "dark",
      },
});

export default theme;