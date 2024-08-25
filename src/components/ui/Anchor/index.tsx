import { styled } from '@mui/material/styles';
import Link from 'next/link';

const Anchor = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#333',
}));

export default Anchor;
