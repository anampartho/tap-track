import {
  AutoGraphOutlined,
  BrowseGalleryOutlined,
  FolderCopyOutlined,
  PeopleAltOutlined,
  RequestQuoteOutlined,
  SettingsOutlined,
  TimerOutlined,
} from '@mui/icons-material';
import { ReactNode } from 'react';

export interface LeftNavMenuItem {
  name: string;
  icon: ReactNode;
  href: string;
  id: string;
}

export const leftNavMenuItems: LeftNavMenuItem[] = [
  { id: 'time', name: 'Tracker', icon: <TimerOutlined />, href: '/time' },
  {
    id: 'time-sheets',
    name: 'Time Sheets',
    icon: <BrowseGalleryOutlined />,
    href: '/time',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <FolderCopyOutlined />,
    href: '/projects',
  },
  { id: 'team', name: 'Team', icon: <PeopleAltOutlined />, href: '/time' },
  {
    id: 'reports',
    name: 'Reports',
    icon: <AutoGraphOutlined />,
    href: '/time',
  },
  {
    id: 'invoices',
    name: 'Invoices',
    icon: <RequestQuoteOutlined />,
    href: '/time',
  },
  { id: 'manage', name: 'Manage', icon: <SettingsOutlined />, href: '/time' },
];
