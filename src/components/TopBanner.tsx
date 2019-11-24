import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import BlurredFrame from './BlurredFrame';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: { 
        width: "100%",
        height: "300px",
        backgroundImage: "url(https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/alaska_arctic_brooks_range_larry_malvin_header.jpg?itok=Mj-Ld9BI)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
    },
});


export default function TopBanner() {
    const classes = useStyles();

    let [blurredClass, setBlurredClass] = React.useState("up");

    return(
        <Hidden smDown>
            <Container maxWidth="md">
                <Grid container justify="center" style={{ marginTop: "10px" }}>
                    <div id="test"
                        onMouseEnter={(e) => { setBlurredClass("down"); }}
                        onMouseLeave={(e) => { setBlurredClass("up"); }}
                        style={{width: "100%", height: "100%"}}
                    >
                        <Grid item className={classes.root} >
                            <BlurredFrame class={blurredClass} text="lorem ipsum etc"/>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </Hidden>
    );
}