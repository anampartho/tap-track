import { FolderCopyOutlined, PlayArrowRounded } from '@mui/icons-material';
import { Box, Button, IconButton, Input } from '@mui/material';

const TimeTracker = () => {
  return (
    <Box
      display="flex"
      borderRadius={2}
      border={'1px solid #eee'}
      alignItems="center"
      sx={{
        transition: 'border-color 0.4s ease',
        '&:focus-within': {
          border: '1px solid rgb(31, 2, 115)',
        },
      }}
    >
      <Box flex={1}>
        <Input
          placeholder="What are you working on today?"
          fullWidth
          disableUnderline
          sx={{
            fontSize: '18px',
            px: 2,
            color: 'rgb(51, 51, 51)',
          }}
        />
      </Box>
      <Box ml="auto" display="flex" alignItems="center" gap={2} py={2} px={3}>
        <Button variant="outlined">Fantasy7</Button>
        <IconButton title="Select a project">
          <FolderCopyOutlined fontSize="small" />
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
