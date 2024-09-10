import React from 'react';

import cn from 'classnames';

import s from './SimpleButton.module.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    className?: string;
}

/**
 *  SimpleButton
 *  @param className
 */

export default function SimpleButton({className = '', children}: Props) {
    return (
        <button className={cn(s.SimpleButton, className)}>
            {children}
        </button>
    )
}



