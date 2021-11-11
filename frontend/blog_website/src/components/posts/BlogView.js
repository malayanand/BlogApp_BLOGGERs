import { Container, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axiosInstance from '../../axios';
//Material-UI
import { useParams } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
	contentStyle: {
		padding: '2rem',
	}
}));

export default function Post() {

    const { slug } = useParams(); // Allows us to extract slug from the url   
    const classes = useStyles();

    const [data, setData] = useState({ posts: [] });

    useEffect(() => {
        axiosInstance.get('posts/?slug=' + slug).then((response) => {
            setData({ posts: response.data });
            console.log(response.data);
        });
    }, [setData]);

    return (
        <Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}></div>
			<div className={classes.heroContent}>
				<Container maxWidth="md">
					<Typography
						component="h1"
						variant="h3"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data.posts.title}
					</Typography>
					<Typography
						variant="h4"
						align="center"
						color="textSecondary"
						paragraph
					>
						{data.posts.excerpt}
					</Typography>
					<Typography
						className={classes.contentStyle}
						variant="h6"
						align="left"
						color="textPrimary"
						paragraph
					>
						{data.posts.content}
					</Typography>
				</Container>
			</div>
		</Container>
    )
}