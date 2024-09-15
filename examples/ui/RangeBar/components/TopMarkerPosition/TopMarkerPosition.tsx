import React from 'react';

import cn from 'classnames';

import useRangeBar from '../../hooks/useRangeBar';

import s from './TopMarkerPosition.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

/**
 *  PositionComponent
 *  @param className
 *  Created by westprophet on 24.07.2024
 */

export default function TopMarkerPosition({ className = '' }: Props) {
  const { progress } = useRangeBar();
  return (
    <div
      style={{ left: `${progress}%` }}
      className={cn(s.TopMarkerPosition, className)}
    />
  );
}
