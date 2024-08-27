import { ReactNode } from 'react';

export interface IBreadcrumbItem {
  id: number | string;
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface IPageTemplateProps {
  pageTitle: string;
  breadcrumbItems?: IBreadcrumbItem[];
}
