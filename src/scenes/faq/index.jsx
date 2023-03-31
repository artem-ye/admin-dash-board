import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title='FAQ' subTitle='Frequently Asked Questions Page' />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, reiciendis.</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Very important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, reiciendis.</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
