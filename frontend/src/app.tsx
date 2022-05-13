/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
import MultipleChoice from "./components/answerTypes/multipleChoice/multipleChoice";
import { getAllCategories, getQuestions } from './api/categories/categories';

const app: React.FunctionComponent = () => {
    const [topics, setTopics] = useState([1, 2, 3]);
    const [selectedTopicId, setSelectedTopicId] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const fetchCategories = async () => {
        const cat = await getAllCategories();
        console.log("cat", cat);
        const test = await getQuestions(cat[0].id);
        console.log("test", test);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // fetchCategories().then();
    }, []);

    return (
        <>
            <Header />
            <Container className='container'>
                {selectedTopicId === 0 && (
                    <>
                        <Description />
                        {
                            topics.map((t, index) => {
                                return (
                                    <Topic
                                        key={index}
                                        id={index+1}
                                        frontPage={selectedTopicId === 0}
                                        image='https://www.kapiert.de/media/image/AB1FDD01/A4ED779D/79386D4A/3B422604.png'
                                        alt='dass/das Bild'
                                        headline='Dass oder das?'
                                        description={'In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. \n Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen. \n In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen.'}
                                        // @ts-expect-error
                                        setIsFrontPage={setSelectedTopicId}
                                    />
                                )
                            })
                        }
                    </>
                )}
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
