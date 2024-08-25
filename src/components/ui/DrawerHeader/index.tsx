import { styled } from '@mui/material/styles';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2.5, 2),
  borderBottom: '1px solid #eee',
}));

export default DrawerHeader;
