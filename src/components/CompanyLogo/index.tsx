import Anchor from '@/components/ui/Anchor';
import DrawerHeader from '@/components/ui/DrawerHeader';
import sampleLogo from '@/public/images/sample-logo.svg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const CompanyLogo = () => {
  return (
    <DrawerHeader>
      <Anchor href="/">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Image src={sampleLogo} alt="Tap Track" />
          <Typography fontSize="20px" component="h1" fontWeight="900">
            Tap Track
          </Typography>
        </Box>
      </Anchor>
    </DrawerHeader>
  );
};

export default CompanyLogo;
