import React, { PropsWithChildren } from 'react';

import ReportMnProvider from './ReportMnProvider';

export default function withReportMnProvider<P>(
  Component: React.ComponentType<PropsWithChildren<P>>
) {
  // eslint-disable-next-line react/display-name
  return (props: PropsWithChildren<P>) => {
    return (
      <ReportMnProvider>
        <Component {...props} />
      </ReportMnProvider>
    );
  };
}
