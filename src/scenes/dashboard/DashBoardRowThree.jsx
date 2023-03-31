import { Box, Typography, useTheme } from '@mui/material';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import ProgressCircle from '../../components/ProgressCircle';
import { tokens } from '../../theme';

const BoxContainer = ({ children, colors, ...props }) => (
	<Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} {...props}>
		{children}
	</Box>
);

const DashBoardRowThree = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<>
			<BoxContainer colors={colors} p='30px'>
				<Typography variant='h5' fontWeight='600'>
					Campaign
				</Typography>
				<Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
					<ProgressCircle size='125' />
					<Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
						$48,352 revenue generated
					</Typography>
					<Typography>Includes extra expenditures and costs</Typography>
				</Box>
			</BoxContainer>

			<BoxContainer colors={colors}>
				<Typography variant='h5' fontWeight='600' sx={{ p: '30px 30px 0 30px' }}>
					Sales Quantity
				</Typography>
				<Box height='250px' mt='-20px'>
					<BarChart isDashboard={true} />
				</Box>
			</BoxContainer>

			<BoxContainer colors={colors} p='30px'>
				<Typography variant='h5' fontWeight='600' sx={{ mb: '15px' }}>
					Geography Based Traffic
				</Typography>
				<Box height='200px'>
					<GeographyChart isDashboard={true} />
				</Box>
			</BoxContainer>
		</>
	);
};

export default DashBoardRowThree;
