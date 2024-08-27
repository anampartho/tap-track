import LogOutButton from '@/components/LogOutButton';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { userData } from './constants';

const SidebarUser = () => {
  return (
    <Box display="flex" gap={1} alignItems="center">
      <Avatar variant="outlined" size="sm" />
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography level="title-sm">{userData.name}</Typography>
        <Typography level="body-xs">{userData.email}</Typography>
      </Box>
      <LogOutButton />
    </Box>
  );
};

export default SidebarUser;
