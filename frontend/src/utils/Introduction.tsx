import React, { FunctionComponent } from 'react';
import { IButton } from '../types/Introduction';
import { Container } from 'react-bootstrap';

const Introduction: FunctionComponent<{
    headline: string,
    headlineClassName?: string,
    description: string,
    descriptionClassName?: string,
    buttons: IButton[]
}> = ({
          headline,
          headlineClassName,
          description,
          descriptionClassName,
          buttons,
      }) => {
    return (
        <Container>
            <div className={headlineClassName}>{headline}</div>
            <div className={descriptionClassName}>{description}</div>
            {
                buttons.length > 0 // ToDo: Change div to Button component
                    ? buttons.map((elem) => (<div className={elem?.className} onClick={elem.onClick}>{elem.name}</div>))
                    : (<div>Button</div>)
            }
        </Container>
    );
};

export default React.memo(Introduction);
