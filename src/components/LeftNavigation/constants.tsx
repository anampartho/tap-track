import { ReactNode } from 'react';
import {
  CgChart,
  CgDollar,
  CgFolder,
  CgOptions,
  CgStopwatch,
  CgUserList,
} from 'react-icons/cg';

export interface LeftNavMenuItem {
  name: string;
  icon: ReactNode;
  href: string;
  id: string;
}

export const leftNavMenuItems: LeftNavMenuItem[] = [
  { id: 'time', name: 'Tracker', icon: <CgStopwatch />, href: '/time' },
  { id: 'projects', name: 'Projects', icon: <CgFolder />, href: '/projects' },
  { id: 'team', name: 'Team', icon: <CgUserList />, href: '/time' },
  { id: 'reports', name: 'Reports', icon: <CgChart />, href: '/time' },
  { id: 'invoices', name: 'Invoices', icon: <CgDollar />, href: '/time' },
  { id: 'manage', name: 'Manage', icon: <CgOptions />, href: '/time' },
];
