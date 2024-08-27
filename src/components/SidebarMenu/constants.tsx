import {
  AutoGraphOutlined,
  BrowseGalleryOutlined,
  FolderCopyOutlined,
  PeopleAltOutlined,
  RequestQuoteOutlined,
  SettingsOutlined,
  TimerOutlined,
} from '@mui/icons-material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { ISidebarMenuItem } from './types';

export const sidebarMainMenuItems: ISidebarMenuItem[] = [
  {
    id: 'time',
    label: 'Tracker',
    icon: <TimerOutlined />,
    href: '/time',
  },
  {
    id: 'time',
    label: 'Time',
    icon: <BrowseGalleryOutlined />,
    href: '/time',
    children: [
      {
        id: 'time-sheets',
        label: 'Time Sheets',
        href: '/time-sheets',
      },
      {
        id: 'time-entries',
        label: 'Time Entries',
        href: '/time-entries',
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <FolderCopyOutlined />,
    href: '/projects',
    children: [
      { id: 'project_id', label: 'Fantasy7', href: '/projects/project_id' },
    ],
  },
  {
    id: 'team',
    label: 'Team',
    icon: <PeopleAltOutlined />,
    href: '/time',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: <AutoGraphOutlined />,
    href: '/time',
  },
  {
    id: 'invoices',
    label: 'Invoices',
    icon: <RequestQuoteOutlined />,
    href: '/time',
  },
  {
    id: 'manage',
    label: 'Manage',
    icon: <SettingsOutlined />,
    href: '/time',
  },
];

export const sidebarOtherMenuItems: ISidebarMenuItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsRoundedIcon />,
    href: '/settings',
  },
];
