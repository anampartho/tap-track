import SidebarMenuItem from '@/components/SidebarMenuItem';
import Toggler from '@/components/Toggler';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { List, ListItem, ListItemButton } from '@mui/joy';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { ISidebarMenuProps } from './types';

const SidebarMenu: FC<ISidebarMenuProps> = ({ menuItems, sx = {} }) => {
  const router = useRouter();
  const handleRouteChange = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  return (
    <List
      size="sm"
      sx={{
        gap: 1,
        '--List-nestedInsetStart': '30px',
        '--ListItem-radius': (theme) => theme.vars.radius.sm,
        ...(sx && { ...sx }),
      }}
    >
      {menuItems.map((item) => {
        const itemHasChildren = item.children && item.children.length > 0;
        return (
          <ListItem key={item.id} nested={itemHasChildren}>
            {itemHasChildren ? (
              <Toggler
                renderToggle={({ open, setOpen }) => (
                  <ListItemButton onClick={() => setOpen(!open)}>
                    <SidebarMenuItem item={item} />
                    <KeyboardArrowDownIcon
                      sx={[
                        open
                          ? {
                              transform: 'rotate(180deg)',
                            }
                          : {
                              transform: 'none',
                            },
                      ]}
                    />
                  </ListItemButton>
                )}
              >
                <List sx={{ gap: 0.5 }}>
                  {item.children?.map((childItem) => (
                    <ListItemButton
                      key={childItem.id}
                      onClick={() =>
                        childItem.href && handleRouteChange(childItem.href)
                      }
                    >
                      <SidebarMenuItem item={childItem} />
                    </ListItemButton>
                  ))}
                </List>
              </Toggler>
            ) : (
              <ListItemButton
                onClick={() => item.href && handleRouteChange(item.href)}
              >
                <SidebarMenuItem item={item} />
              </ListItemButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default SidebarMenu;
