import { Box, Button, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { DownloadOutlined as DownloadIcon } from '@mui/icons-material';
import { tokens } from '../../theme';
import DashBoardRowOne from './DashBoardRowOne';
import DashBoardRowTwo from './DashBoardRowTwo';
import DashBoardRowThree from './DashBoardRowThree';

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			{/** HEADER */}
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Header title='DASHBOARD' subTitle='Welcome to dashboard' />
				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.gray[100],
							fontSize: '14px',
							fontWeight: 'bold',
							padding: '10px 20px',
						}}
					>
						<DownloadIcon sx={{ mr: '10px' }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/** GRID AND CHARTS */}
			<Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='20px'>
				<DashBoardRowOne />
				<DashBoardRowTwo />
				<DashBoardRowThree />
			</Box>
		</Box>
	);
};

export default Dashboard;
