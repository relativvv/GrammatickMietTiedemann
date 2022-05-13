import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
import MultipleChoice from "./components/answerTypes/multipleChoice/multipleChoice";
import LoginRegistration from "./components/loginRegistration/loginRegistration";

const app: FC<Record<string, never>> = () => {
    return (
        <>
            <Header />
            <Container className='container'>
                <Description />
            </Container>
            <MultipleChoice />

            <LoginRegistration />
        </>
    )
};

export default app;
