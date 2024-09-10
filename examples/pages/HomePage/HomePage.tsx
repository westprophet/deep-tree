import React from 'react';

import cn from 'classnames';

import s from './HomePage.module.scss';

import {withReportMnProvider} from "../../context/ReportMn";
import MainSection from "./sections/MainSection";

interface Props {
    className?: string;
}

/**
 *  HomePage
 *  @param className
 */

function HomePage({className = ''}: Props) {
    return (
        <main className={cn(s.HomePage, className)}>
            <MainSection/>
        </main>
    )
}
export default withReportMnProvider(HomePage);


