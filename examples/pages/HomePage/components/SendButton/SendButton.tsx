import React, {useCallback, useState} from 'react';

import cn from 'classnames';

import s from './SendButton.module.scss';
import SimpleButton from "../../../../ui/SimpleButton";
import {useReportMn} from "../../../../context/ReportMn";

interface Props {
    className?: string;
    reportId: string;
}

/**
 *  SendButton
 *  @param className
 */

export default function SendButton({className = '', reportId}: Props) {
    const reportManager = useReportMn();
    const [loading, setLoading] = useState(false);
    const onClickHandler = useCallback(()=>{
        if(loading) return;
        setLoading(true);
        reportManager.send(reportId).finally(() => setLoading(false));
    },[loading])
    return (
        <SimpleButton className={cn(s.SendButton, className)}>
            {!loading ? 'Send Report': 'loading...'}
        </SimpleButton>
    )
}



