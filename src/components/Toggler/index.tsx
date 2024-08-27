import { Box } from '@mui/joy';
import { FC, PropsWithChildren, useState } from 'react';
import { ITogglerProps } from './types';

const Toggler: FC<PropsWithChildren<ITogglerProps>> = ({
  defaultExpanded = false,
  renderToggle,
  children,
}) => {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: 'grid',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          },
          open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
        ]}
      >
        {children}
      </Box>
    </>
  );
};

export default Toggler;
