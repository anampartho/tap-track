import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButton from '@mui/joy/IconButton';

const LogOutButton = () => {
  const handleLogOut = () => {
    console.log('logged out!');
  };
  return (
    <IconButton
      size="sm"
      variant="plain"
      color="neutral"
      onClick={handleLogOut}
    >
      <LogoutRoundedIcon />
    </IconButton>
  );
};

export default LogOutButton;
