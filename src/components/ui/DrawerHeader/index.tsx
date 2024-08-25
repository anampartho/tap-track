import { styled } from '@mui/material/styles';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  borderBottom: '1px solid #eee',
  height: '60px',
}));

export default DrawerHeader;
