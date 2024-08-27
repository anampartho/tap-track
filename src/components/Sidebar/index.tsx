'use client';
import SidebarMenu from '@/components/SidebarMenu';
import {
  sidebarMainMenuItems,
  sidebarOtherMenuItems,
} from '@/components/SidebarMenu/constants';
import { closeSidebar } from '@/utils/toggleSidebar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import GlobalStyles from '@mui/joy/GlobalStyles';
import { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import CompanyInfo from '../CompanyInfo';
import SidebarUser from '../SidebarUser';

const Sidebar = () => {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <CompanyInfo />
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <SidebarMenu menuItems={sidebarMainMenuItems} />
        <SidebarMenu
          menuItems={sidebarOtherMenuItems}
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--List-gap': '8px',
          }}
        />
      </Box>
      <Divider />
      <SidebarUser />
    </Sheet>
  );
};

export default Sidebar;
