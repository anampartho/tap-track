import { Link, Typography } from '@mui/joy';
import { FC } from 'react';
import { IBreadcrumbItemProps } from './types';

const BreadcrumbItem: FC<IBreadcrumbItemProps> = ({ breadcrumbItem }) => {
  return (
    <>
      {breadcrumbItem.href && breadcrumbItem.href.length > 0 ? (
        <Link
          underline="none"
          color="neutral"
          href={breadcrumbItem.href}
          aria-label="Home"
          sx={{
            fontSize: 12,
            fontWeight: 500,
            display: 'flex',
            gap: 1,
            alignItems: 'center',
          }}
        >
          {breadcrumbItem.icon && breadcrumbItem.icon}
          {breadcrumbItem.label}
        </Link>
      ) : (
        <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
          {breadcrumbItem.label}
        </Typography>
      )}
    </>
  );
};

export default BreadcrumbItem;
