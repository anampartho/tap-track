import { ListProps } from '@mui/joy';
import { ReactNode } from 'react';

export interface ISidebarMenuItem {
  id: string | number;
  label: string;
  icon?: ReactNode;
  href?: string;
  children?: ISidebarMenuItem[];
}

export interface ISidebarMenuProps {
  menuItems: ISidebarMenuItem[];
  sx?: ListProps['sx'];
}
