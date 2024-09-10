import React, {useCallback} from 'react';
import {TReportMnState} from "./types";

export default function useInitialState<TReportMnState>(){
    const send = useCallback(async (id: string) => {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                alert(`Sended report:${id}`);
                resolve();
            }, 2000);
        });
    }, []);

    return {send};
}
