import { AppDispatch } from '@/store/rootStore';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
