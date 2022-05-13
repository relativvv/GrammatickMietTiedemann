/* eslint-disable react-hooks/rules-of-hooks,react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
import MultipleChoice from "./components/answerTypes/multipleChoice/multipleChoice";
import LoginRegistration from "./components/loginRegistration/loginRegistration";
import { getAllCategories, getQuestions } from './api/categories/categories';
import {Category} from "./types/categories";
import Topic from "./components/topic/topic";

const app: React.FunctionComponent = () => {
    const [topics, setTopics] = useState([{
        id: 1,
        name: 'Dass oder das?',
        description: 'In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. \n Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen. \n In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen.'
    },
    {
        id: 2,
        name: 'Rechtschreibung',
        description: 'In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. \n Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen. \n In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen.'
    },
    {
        id: 3,
        name: 'Groß- oder Kleinschreibung',
        description: 'In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. \n Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen. \n In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen.'
    }] as Array<Category>);
    const [selectedTopicId, setSelectedTopicId] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState(null as unknown as Category);

    const fetchCategories = async () => {
        const categories = await getAllCategories();
        setTopics(categories);
        const test = await getQuestions(categories[0].id);
        console.log("test", test);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // fetchCategories().then();
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

    console.log(selectedTopicId)

    return (
        <>
            <Header />
            <Container className='container'>
                <LoginRegistration />
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
                                            image='https://www.kapiert.de/media/image/AB1FDD01/A4ED779D/79386D4A/3B422604.png'
                                            alt='dass/das Bild'
                                            headline={t.name}
                                            description={t.description}
                                            // @ts-expect-error
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
                                    image='https://www.kapiert.de/media/image/AB1FDD01/A4ED779D/79386D4A/3B422604.png'
                                    alt='dass/das Bild'
                                    headline={selectedTopic.name}
                                    description={selectedTopic.description}
                                    // @ts-expect-error
                                    setIsFrontPage={setSelectedTopicId}
                                />
                            )
                        }
                    </>
                    )}
            </Container>
        </>
    )
};

export default app;
