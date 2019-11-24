import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#56494C",
            light: "#938B8D",
            dark: "#3F3638"
        },
        secondary: {
            main: "#BDCACB",
            light: "#DAE1E2",
            dark: "#707A7B",
        },
        error: {
          main: red.A400,
        },
        type: "dark",
        divider: "#9FA4A9",
      },
});

export default theme;