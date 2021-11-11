import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import './Footer.css';


const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/malayanand/">
				anandmalay6
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const footers = [
    {
        title: 'Company',
        description: ['Team', 'About us', 'Contact', 'Locations']
    },
    {
        title:'Features',
        description: ['Explore', 'Connect', 'For developers']
    },
    {
        title:"Legal",
        description: ['Privacy Policies', 'Terms of use']
    }
];

function Footer() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth='md' component='footer' className={classes.footer}>
                <Grid container spacing={6} justify-content="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={5} sm={4} key={footer.title}>
                            <Typography align="center" varient="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" varient="subtitle" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}

export default Footer;