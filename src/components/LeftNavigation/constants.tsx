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

const iconSize = 'small';

export const leftNavMenuItems: LeftNavMenuItem[] = [
  {
    id: 'time',
    name: 'Tracker',
    icon: <TimerOutlined fontSize={iconSize} />,
    href: '/time',
  },
  {
    id: 'time-sheets',
    name: 'Time Sheets',
    icon: <BrowseGalleryOutlined fontSize={iconSize} />,
    href: '/time',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <FolderCopyOutlined />,
    href: '/projects',
  },
  {
    id: 'team',
    name: 'Team',
    icon: <PeopleAltOutlined fontSize={iconSize} />,
    href: '/time',
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: <AutoGraphOutlined fontSize={iconSize} />,
    href: '/time',
  },
  {
    id: 'invoices',
    name: 'Invoices',
    icon: <RequestQuoteOutlined fontSize={iconSize} />,
    href: '/time',
  },
  {
    id: 'manage',
    name: 'Manage',
    icon: <SettingsOutlined fontSize={iconSize} />,
    href: '/time',
  },
];
