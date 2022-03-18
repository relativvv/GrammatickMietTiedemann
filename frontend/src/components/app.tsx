import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import {Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import TaskDescription from '../untils/taskDescription/TaskDescription';


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
            <TaskDescription
                headline={"Titel der Aufgabe"}
                description={"lsdflksdlksldfsnfknsdkjnfjsnnsdfnsdfnksdnfkjngngkjfsöljfjlvnslkdhkn"}
            />
        </>
    )
};

export default app;
