import React from 'react';

import ReportMnContext from './ReportMnContext';

export default function withReportMnContext<T>(
  Component: React.ComponentType<T>
) {
  // eslint-disable-next-line react/display-name
  return (props: T) => (
    <ReportMnContext.Consumer>
      {(context) => (
        <Component {...props} ReportMnContext={context} />
      )}
    </ReportMnContext.Consumer>
  );
}
