import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";

const app: FC<Record<string, never>> = () => {
    return (
        <>
            <Header />
            <Container className='container'>
                <Description />
            </Container>
        </>
    )
};

export default app;
