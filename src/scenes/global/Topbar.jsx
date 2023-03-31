import { useContext } from 'react';
import { colorModeContext, DARK_MODE, tokens } from '../../theme';

import { Box, IconButton, useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(colorModeContext);

	return (
		<Box display='flex' justifyContent='space-between' p={2}>
			{/** SEARCH */}
			<Box display='flex' bgcolor={colors.primary[400]} borderRadius='3px'>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search'></InputBase>
				<IconButton type='button' sx={{ p: 1 }}>
					<SearchOutlinedIcon />
				</IconButton>
			</Box>
			{/** ICONS */}
			<Box display='flex'>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === DARK_MODE ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
