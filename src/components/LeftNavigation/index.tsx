'use client';

import Anchor from '@/components/ui/Anchor';
import Drawer from '@/components/ui/Drawer';
import DrawerHeader from '@/components/ui/DrawerHeader';
import { RootState } from '@/store/rootStore';
import { ListItemIcon, MenuItem, MenuList, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { leftNavMenuItems } from './constants';

const LeftNavigation = () => {
  const open = useSelector(
    (state: RootState) => state.theme.isLeftNavDrawerOpen
  );

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Typography variant="body1" component="h1" fontWeight="bold">
          TAP-Track
        </Typography>
      </DrawerHeader>
      <MenuList>
        {leftNavMenuItems.map((menuItem) => (
          <Anchor href={menuItem.href}>
            <MenuItem key={menuItem.id}>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              {menuItem.name}
            </MenuItem>
          </Anchor>
        ))}
      </MenuList>
    </Drawer>
  );
};

export default LeftNavigation;
