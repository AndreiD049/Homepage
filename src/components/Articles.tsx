import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

interface Article {
    heading: string,
    description: string,
    date: string
}

interface Articles {
    items: Article[]
}

const useStyles = makeStyles({
    articles: {
        padding: "30px 20px",
    }
});

export default function(props: Articles) {
    const classes = useStyles();

    const articles = props.items.map((article: Article, idx: number) => {
        return (
            <article key={idx} className={classes.articles}>
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={12}>
                    <sub>{article.date}</sub>
                    </Grid>
                    <Grid item sm={9} xs={12} style={{paddingBottom: "30px"}}>
                    <Typography variant="h4">
                        <Link href="#" color="primary"> {article.heading} </Link>
                    </Typography>
                    <p>{article.description}</p>
                    </Grid>
                </Grid>
                <Divider />
            </article>
        );
    });

    return (
        <Container maxWidth="md" className={classes.articles}>
            {articles}
        </Container>
    );
}