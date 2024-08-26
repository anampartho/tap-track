import TimeTracker from '@/components/TimeTracker';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="900" mb={2}>
        Hi, Tashrik!
      </Typography>
      <TimeTracker />
    </Box>
  );
}
