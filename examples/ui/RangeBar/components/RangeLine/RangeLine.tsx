import React from 'react';

import cn from 'classnames';

import s from './RangeLine.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: React.ReactNode;
}

/**
 *  RangeLine
 *  @param className
 *  Created by westprophet on 24.07.2024
 * @param children
 */

export default function RangeLine({ className = '', children }: Props) {
  return <div className={cn(s.RangeLine, className)}>{children}</div>;
}
