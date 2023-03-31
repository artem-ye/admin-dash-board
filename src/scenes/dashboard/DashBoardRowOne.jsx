import { Box, useTheme } from '@mui/material';
import StatBox from '../../components/StatBox';
import { tokens } from '../../theme';

import {
	Email as EmailIcon,
	PointOfSale as PointOfSaleIcon,
	PersonAdd as PersonAddIcon,
	Traffic as TrafficIcon,
} from '@mui/icons-material';

const RowItem = ({ colors, title, subTitle, progress, increase, IconComponent }) => (
	<Box
		gridColumn={`span 3`}
		backgroundColor={colors.primary[400]}
		display='flex'
		justifyContent='center'
		alignItems='center'
	>
		<StatBox
			title={title}
			subTitle={subTitle}
			progress={progress}
			increase={increase}
			icon={<IconComponent sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
		/>
	</Box>
);

const DashBoardRowOne = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<>
			<RowItem
				colors={colors}
				title='12,361'
				subTitle='Emails Sent'
				progress={0.75}
				increase='+14%'
				IconComponent={EmailIcon}
			/>
			<RowItem
				colors={colors}
				title='431,361'
				subTitle='Sales Obtained'
				progress={0.5}
				increase='+21%'
				IconComponent={PointOfSaleIcon}
			/>
			<RowItem
				colors={colors}
				title='32,441'
				subTitle='New Clients'
				progress={0.3}
				increase='+5%'
				IconComponent={PersonAddIcon}
			/>
			<RowItem
				colors={colors}
				title='1,325,134'
				subTitle='Traffic Inbound'
				progress={0.8}
				increase='+43%'
				IconComponent={TrafficIcon}
			/>
		</>
	);
};

export default DashBoardRowOne;
