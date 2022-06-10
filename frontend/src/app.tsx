/* eslint-disable react-hooks/rules-of-hooks,react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
import {Category} from "./types/categories";
import Topic from "./components/topic/topic";
import LoginRegistration from "./components/loginRegistration/loginRegistration";
import {getAllCategories, getQuestions} from "./api/categories/categories";

const app: React.FunctionComponent = () => {
    const [topics, setTopics] = useState([] as Array<Category>);
    const [selectedTopicId, setSelectedTopicId] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState(null as unknown as Category);
    const [showLogin, setShowLogin] = useState(false);

    const fetchCategories = async () => {
        const categories = await getAllCategories();
        setTopics(categories);
        const question = await getQuestions(categories[0].id);
        console.log("question", question);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchCategories()
            .then(/* ignore */);
    }, []);

    useEffect(() => {
        if (selectedTopicId !== 0) {
            const category = topics.find(t => t.id === selectedTopicId);
            if (category) setSelectedTopic(category);
            else { // @ts-ignore
                setSelectedTopic(null);
            }
        }
    }, [selectedTopicId])

    return (
        <>
            <Header setShowLogin={setShowLogin} />
            {
                showLogin
                    ? (
                        <Container>
                            <LoginRegistration />
                        </Container>
                    ) : (
                        <Container className='container'>
                            {selectedTopicId === 0
                                ? (
                                    <>
                                        <Description />
                                        {
                                            topics.map((t, index) => {
                                                return (
                                                    <Topic
                                                        key={index}
                                                        id={t.id}
                                                        frontPage={true}
                                                        image='https://static.dw.com/image/17969819_303.jpg'
                                                        alt='dass/das Bild'
                                                        headline={t.name}
                                                        description={t.description}
                                                        // @ts-expect-error whyy
                                                        setIsFrontPage={setSelectedTopicId}
                                                    />
                                                )
                                            })
                                        }
                                    </>
                                )
                                : (
                                    <>
                                        {
                                            selectedTopic && (
                                                <Topic
                                                    key={selectedTopic.id}
                                                    id={selectedTopic.id}
                                                    frontPage={false}
                                                    image='https://static.dw.com/image/17969819_303.jpg'
                                                    alt='dass/das Bild'
                                                    headline={selectedTopic.name}
                                                    description={selectedTopic.description}
                                                    // @ts-expect-error whyy
                                                    setIsFrontPage={setSelectedTopicId}
                                                />
                                            )
                                        }
                                    </>
                                )}
                        </Container>
                    )
            }
        </>
    )
};

export default app;
