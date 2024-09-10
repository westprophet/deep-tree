import { useContext } from 'react';

import ReportMnContext from './ReportMnContext';

export const useReportMn = () =>
  useContext(ReportMnContext);
