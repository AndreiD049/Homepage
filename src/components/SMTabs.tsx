import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
    },
    paper: {
        display: "inline-flex",
        // backgroundColor: "blue",
    },
    link: {
        padding: "0px 15px"
    }
});


export default function SMTabs() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper className={classes.paper}>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <GitHubIcon color="secondary" fontSize="large" />
                </Link>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <TelegramIcon color="secondary" fontSize="large" />
                </Link>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <RedditIcon color="secondary" fontSize="large" />
                </Link>
                <Link href="#" component="a" variant="h3" className={classes.link}>
                    <TwitterIcon color="secondary" fontSize="large" />
                </Link>
            </Paper>
        </Container>
    );
}