import { FC, PropsWithChildren } from 'react';
import ReactQueryProvider from './ReactQueryProvider';
import ReduxProvider from './ReduxProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ReduxProvider>
  );
};

export default Providers;
