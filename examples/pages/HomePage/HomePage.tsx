import React from 'react';

import cn from 'classnames';

import s from './HomePage.module.scss';
import SendButton from "./components/SendButton";
import {withReportMnProvider} from "../../context/ReportMn";

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
            <SendButton reportId="10"/>
        </main>
    )
}
export default withReportMnProvider(HomePage);


