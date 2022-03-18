import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const TaskDescription: FunctionComponent<{
    headline: string,
    description: string,
    imgUrl?: string,
}> = ({
    headline,
    description,
    imgUrl
                             }) => {
    return (
        <Container>
            <div className={'taskDescription'}>
                <div>{headline}</div>
                <div>{description}</div>
                <Image
                    src={require('../../images/header.jpg')}
                    alt='headerImage'
                    fluid
                />
            </div>
        </Container>
    );
};

TaskDescription.displayName = 'TaskDescription';

export default React.memo(TaskDescription);
