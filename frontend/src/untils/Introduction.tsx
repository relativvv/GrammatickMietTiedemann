import React, { FunctionComponent } from 'react';
import { IButton } from '../types/Introduction';

const Introduction: FunctionComponent<{headline: string, description: string, buttons: IButton[]}> = ({
    headline,
    description,
    buttons
                                                                                                      }) => {
    return (
        <>
        </>
    );
};

export default React.memo(Introduction);
