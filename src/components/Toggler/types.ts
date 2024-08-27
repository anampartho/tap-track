import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IRenderToggleParams {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ITogglerProps {
  defaultExpanded?: boolean;
  renderToggle: (params: IRenderToggleParams) => ReactNode;
}
