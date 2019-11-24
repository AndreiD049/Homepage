import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    class: string,
    text: string,
}



const useStyles: any = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    },
    down: {
        transition: "top 2s cubic-bezier(0.18, 0.89, 0.36, 0.93)",
        top: "300px",
    },
    up: {
        transition: "top 1s cubic-bezier(0.18, 0.89, 0.36, 0.93)",
        top: "0",
    },
    text: {
        zIndex: 5,
        fontWeight: "bold",
        color: "white",
        textShadow: "1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000",
    },
    background: {
        position: "absolute",
        width: "102%",
        height: "102%",
        filter: "blur(5px)",
        backgroundColor: "white",
        opacity: ".7",
        top: "-1%",
        left: "-1%",
    }
});


export default function BlurredFrame(props: Props) {
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${classes[props.class]}`}>
            <Typography align="center" color="primary" component="h1" variant="h1" className={classes.text}>
                { props.text.toUpperCase() }
            </Typography>
            <div className={`${classes.background}`}></div>
        </div>
    );
} 