import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import {Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image'


const app: FC<Record<string, never>> = () => {
    return (
        <>
            <Image
                src={require('../images/header.jpg')}
                alt='headerImage'
                fluid
            />
            <h1>GrammatickMietTiedemann</h1>
            <Container>
                <p>Hellofeowpjfffff lovjkfwenfe erbwiasdjknqgwmefk nweisdynf werigsdfynweuigsdf vfdkjnbiogasdf
                    sowgjefsiojgnwkls</p>
            </Container>
        </>
    )
};

export default app;
