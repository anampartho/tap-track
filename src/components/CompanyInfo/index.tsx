import ColorSchemeToggle from '@/components/ColorSchemeToggle';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const CompanyInfo = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <IconButton variant="soft" color="primary" size="sm">
        <BrightnessAutoRoundedIcon />
      </IconButton>
      <Typography level="title-lg">Tap Track</Typography>
      <ColorSchemeToggle sx={{ ml: 'auto' }} />
    </Box>
  );
};

export default CompanyInfo;
