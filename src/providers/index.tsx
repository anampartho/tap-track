import { FC, PropsWithChildren } from 'react';
import MUIProvider from './MUIProvider';
import ReactQueryProvider from './ReactQueryProvider';
import ReduxProvider from './ReduxProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MUIProvider>
      <ReduxProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ReduxProvider>
    </MUIProvider>
  );
};

export default Providers;
