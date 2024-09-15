import React from 'react';

import cn from 'classnames';

import s from './Label.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: 'yellow' | 'red' | 'green';
}

/**
 *  Label
 *  @param className
 *  Created by westprophet on 24.07.2024
 * @param color
 * @param children
 */

export default function Label({
  className = ', title',
  color,
  children,
}: Props) {
  return (
    <div className={cn(s.Label, s[color as string], className)}>{children}</div>
  );
}
