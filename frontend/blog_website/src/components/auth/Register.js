import * as React from 'react';
//material UI
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
	avatar: {
		marginTop: theme.spacing(8),
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		margin: theme.spacing(3,0,2),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(3),
	},
}));

const theme = createTheme();

export default function SignUp() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        user_name: '',
        password: '',
    });

    const [formData, setFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            //Triming any whitespaces
            [e.target.name]: e.target.value.trim(),
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance.post('user/create/', {
            email: formData.email,
            user_name: formData.user_name,
            password: formData.password,
        }).then((response) => {
            history.push('/login');
            console.log(response);
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formData);

    //     try {
    //         const response = await axiosInstance.post('user/create/', {
    //             email: formData.email,
    //             user_name: formData.user_name,
    //             password: formData.password,
    //         });
    //         history.push('/login');
    //         console.log(response);
    //         console.log(response.data);
    //     } catch (err) {
    //         console.log('Promise rejected', err);
    //     }
    // };

	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
			sx={{
				marginTop: 10,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			>
			<Avatar className={classes.avatar} sx={{ m: 1, bgcolor: 'secondary.main' }}>
				{/* <LockOutlinedIcon />  */}
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} className={classes.form}>
				<Grid container spacing={3}>
				<Grid item xs={12} sm={12}>
					<TextField
					variant="outlined"
					label='Email Address'
					id="email"
					name="email"
					required
					fullWidth
					autoFocus
					autoComplete="email"
					onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={12}>
					<TextField
					variant="outlined"
					required
					fullWidth
					id="user_name"
					label="User name"
					name="user_name"
					autoComplete="username"
					onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						type='password'
						required
						fullWidth
						id="password"
						label="Password"
						name="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
					control={<Checkbox value="allowExtraEmails" color="primary" />}
					label="I want to receive inspiration, marketing promotions and updates via email."
					/>
				</Grid>
				</Grid>
				<Button
					color="primary"
					type="submit"
					fullWidth
					variant="contained"
					className={classes.submit}
					sx={{ mt: 3, mb: 2 }}
				>
				Sign Up
				</Button>
				<Grid container justifyContent="flex-end">
				<Grid item>
					<Link href="#" variant="body2">
					Already have an account? Sign in
					</Link>
				</Grid>
				</Grid>
			</Box>
			</Box>
		</Container>
		</ThemeProvider>
	);
	}