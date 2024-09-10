import React from 'react';


import ReportMnContext from './ReportMnContext';
import useInitialState from "./useInitialState";


interface TReportMnProviderProps {
  children: React.ReactNode;
}

export default function ReportMnProvider({
  children,
}: TReportMnProviderProps) {
  const values = useInitialState();
  return (
    <ReportMnContext.Provider
      value={values}
    >
      {children}
    </ReportMnContext.Provider>
  );
}
