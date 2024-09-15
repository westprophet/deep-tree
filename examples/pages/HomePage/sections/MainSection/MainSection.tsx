import React from 'react';

import cn from 'classnames';

import s from './MainSection.module.scss';
import SendButton from "../../components/SendButton";
import RangeBar from "../../../../ui/RangeBar";

/**
 *  MainSection
 *  @param className
 */

export default function MainSection() {
    return (
        <section className={cn(s.MainSection)}>
            <SendButton reportId="10"/>
            <RangeBar.Wrapper progress={progress} className={s.range}>
                <RangeBar.Line>
                    <RangeBar.TopMarkerPosition />
                    <RangeBar.LinePosition />
                </RangeBar.Line>
                <RangeBar.Labels>
                    <RangeBar.Label color='green'>Normal</RangeBar.Label>
                    <RangeBar.Label color='red'>
                        Bad
                    </RangeBar.Label>
                </RangeBar.Labels>
            </RangeBar.Wrapper>
        </section>
    )
}



