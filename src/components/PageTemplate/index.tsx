import BreadcrumbItem from '@/components/BreadcrumbItem';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, Breadcrumbs, Typography } from '@mui/joy';
import { FC, PropsWithChildren } from 'react';
import { IPageTemplateProps } from './types';

const PageTemplate: FC<PropsWithChildren<IPageTemplateProps>> = ({
  pageTitle,
  breadcrumbItems,
}) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <BreadcrumbItem
            breadcrumbItem={{
              id: 'dashboard',
              label: 'Dashboard',
              href: '/',
              icon: <HomeRoundedIcon />,
            }}
          />
          {breadcrumbItems &&
            breadcrumbItems.length > 0 &&
            breadcrumbItems.map((breadcrumbItem) => (
              <BreadcrumbItem
                key={breadcrumbItem.id}
                breadcrumbItem={breadcrumbItem}
              />
            ))}
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="h2" component="h1">
          {pageTitle}
        </Typography>
      </Box>
    </>
  );
};

export default PageTemplate;
