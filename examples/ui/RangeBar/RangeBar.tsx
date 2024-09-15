import React, { createContext } from 'react';

import cn from 'classnames';

import { assertsTPercent, TPercent } from 'types/primitive/TPercent.type';

import s from './RangeBar.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  progress: TPercent;
}

/**
 *  RangeBar
 *  @param className
 *  @param children
 */

export const RangeBarContext = createContext({
  progress: 0 as TPercent,
});

// cut number in range for visual
const clamp = (value: number, min = 2, max = 98) =>
  Math.min(Math.max(value, min), max);

export default function RangeBar({
  className = '',
  children,
  progress,
}: Props) {
  assertsTPercent(progress); // validation percent value
  return ( // simple context
    <RangeBarContext.Provider value={{ progress: clamp(progress) }}>
      <div className={cn(s.RangeBar, className)}>{children}</div>
    </RangeBarContext.Provider>
  );
}
