'use client';

import CompanyLogo from '@/components/CompanyLogo';
import Anchor from '@/components/ui/Anchor';
import Drawer from '@/components/ui/Drawer';
import { RootState } from '@/store/rootStore';
import { ListItemIcon, MenuItem, MenuList } from '@mui/material';
import { useSelector } from 'react-redux';
import { leftNavMenuItems } from './constants';

const LeftNavigation = () => {
  const open = useSelector(
    (state: RootState) => state.theme.isLeftNavDrawerOpen
  );

  return (
    <Drawer variant="permanent" open={open}>
      <CompanyLogo />
      <MenuList>
        {leftNavMenuItems.map((menuItem) => (
          <Anchor href={menuItem.href} key={menuItem.id}>
            <MenuItem>
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
