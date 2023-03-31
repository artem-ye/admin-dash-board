import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const INITIAL_VALUES = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	address1: '',
	address2: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
	firstName: yup.string().required('required'),
	lastName: yup.string().required('required'),
	email: yup.string().email('invalid email').required('required'),
	contact: yup.string().required('required'),
	address1: yup.string().required('required'),
	address2: yup.string().required('required'),
});

const Form = () => {
	const isNonModile = useMediaQuery('(min-width:600px)');

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<Box m='20px'>
			<Header title='CREATE USER' subTitle='Create a New User Profile' />
			<Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
					const renderTextField = (name, label, spanWidth) => (
						<TextField
							fullWidth
							variant='filled'
							type='text'
							label={label}
							onBlur={handleBlur}
							onChange={handleChange}
							onSubmit={handleSubmit}
							value={values[name]}
							name={name}
							error={!!touched[name] && !!errors[name]}
							helperText={touched[name] && errors[name]}
							sx={{ gridColumn: `span ${spanWidth}` }}
						/>
					);

					return (
						<form onSubmit={handleSubmit}>
							<Box
								display='grid'
								gap='30px'
								gridTemplateColumns='repeat(4, minmax(0, 1fr))'
								sx={{
									'& > div': { gridColumn: isNonModile ? undefined : 'span 4' },
								}}
							>
								{renderTextField('firstName', 'First name', 2)}
								{renderTextField('lastName', 'Last Name', 2)}
								{renderTextField('email', 'Email', 4)}
								{renderTextField('contact', 'Phone number', 4)}
								{renderTextField('address1', 'Address 1', 4)}
								{renderTextField('address2', 'Address 2', 4)}
							</Box>
							<Box display='flex' justifyContent='end' mt='20px'>
								<Button type='submit' color='secondary' variant='contained'>
									Create new user
								</Button>
							</Box>
						</form>
					);
				}}
			</Formik>
		</Box>
	);
};

export default Form;
