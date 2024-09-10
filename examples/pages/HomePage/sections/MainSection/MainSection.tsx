import React from 'react';

import cn from 'classnames';

import s from './MainSection.module.scss';
import SendButton from "../../components/SendButton";
/**
 *  MainSection
 *  @param className
 */

export default function MainSection() {
    return (
        <section className={cn(s.MainSection)}>
            <SendButton reportId="10"/>
        </section>
    )
}



