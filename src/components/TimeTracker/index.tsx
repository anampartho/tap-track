import { FolderOutlined, PlayArrowRounded } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';

const TimeTracker = () => {
  return (
    <Box
      display="flex"
      py={2}
      px={3}
      borderRadius={2}
      border={'1px solid #eee'}
      alignItems="center"
    >
      <Typography component="p" fontSize="18px" fontWeight="normal">
        What are you working on today?
      </Typography>
      <Box ml="auto" display="flex" alignItems="center" gap={2}>
        <Button variant="outlined">Fantasy7</Button>
        <IconButton title="Select a project">
          <FolderOutlined />
        </IconButton>
        0:00:00
        <IconButton type="button" title="Start tracking" color="primary">
          <PlayArrowRounded />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TimeTracker;
