import React, { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
import { getAllCategories } from './api/categories/categories';

const app: FC<Record<string, never>> = () => {

    const fetchCategories = async () => {
        const cat = await getAllCategories();
        console.log("cat");
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchCategories().then();
    }, []);

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
