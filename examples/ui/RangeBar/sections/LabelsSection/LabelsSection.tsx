import React from 'react';

import cn from 'classnames';

import s from './LabelsSection.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: React.ReactNode;
}

/**
 *  LabelsSection
 *  Created by westprophet on 24.07.2024
 *  @param className
 * @param children
 */

export default function LabelsSection({ className = '', children }: Props) {
  return <div className={cn(s.LabelsSection, className)}>{children}</div>;
}
