import { ListItemContent, Typography } from '@mui/joy';
import { FC } from 'react';
import { ISidebarMenuItemProps } from './types';

const SidebarMenuItem: FC<ISidebarMenuItemProps> = ({ item }) => {
  return (
    <>
      {item.icon && item.icon}
      <ListItemContent>
        <Typography level="title-sm">{item.label}</Typography>
      </ListItemContent>
    </>
  );
};

export default SidebarMenuItem;
