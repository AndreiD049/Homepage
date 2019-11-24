import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme : any) => {
    console.log(theme.palette);
    return {
        container: {
            display: "flex",
            justifyContent: "center",
        },
        paper: {
            display: "inline-flex",
            // backgroundColor: "blue",
        },
        link: {
            padding: "0px 15px",
            color: theme.palette.secondary.main,
            transition: "background-color .5s ease-in-out",
            "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.secondary.light,
            }
        }
    }
});


export default function SMTabs() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper className={classes.paper} square>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <GitHubIcon fontSize="large" />
                </Link>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <TelegramIcon fontSize="large" />
                </Link>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <RedditIcon fontSize="large" />
                </Link>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <TwitterIcon fontSize="large" />
                </Link>
            </Paper>
        </Container>
    );
}