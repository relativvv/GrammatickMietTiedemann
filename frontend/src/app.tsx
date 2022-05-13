import React, { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
<<<<<<< Updated upstream
import MultipleChoice from "./components/answerTypes/multipleChoice/multipleChoice";
import { getAllCategories } from './api/categories/categories';
=======
import { getAllCategories, getQuestions } from './api/categories/categories';
>>>>>>> Stashed changes

const app: FC<Record<string, never>> = () => {

    const fetchCategories = async () => {
        const cat = await getAllCategories();
        console.log("cat", cat);
        const test = await getQuestions(cat[0].id);
        console.log("test", test);
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
            <MultipleChoice />

            <div className="input-wrapper">
                <input type="text" id="test" placeholder=" " />
                <label htmlFor="test">Test</label>
            </div>
        </>
    )
};

export default app;
