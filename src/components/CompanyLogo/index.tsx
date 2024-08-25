import DrawerHeader from '@/components/ui/DrawerHeader';
import { Typography } from '@mui/material';

const CompanyLogo = () => {
  return (
    <DrawerHeader>
      <Typography variant="body1" component="h1" fontWeight="bold">
        TAP-Track
      </Typography>
    </DrawerHeader>
  );
};

export default CompanyLogo;
