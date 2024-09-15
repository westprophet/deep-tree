import { useContext } from 'react';

import { RangeBarContext } from '../RangeBar';

export default function useRangeBar() {
  return useContext(RangeBarContext);
}
