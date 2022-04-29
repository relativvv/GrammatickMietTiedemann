import React from 'react';
import './topic.scss';
import {Container, Image} from "react-bootstrap";

type TopicProps = {
    frontPage: boolean,
    image: string,
    alt: string,
    headline: string,
    description: string
};

const Topic: React.FunctionComponent<TopicProps> = ({
    frontPage,
    image,
    alt,
    headline,
    description
                                                    }) => {
    if (frontPage) {
        return (
            <Container className='d-flex flex-row topic-front-page'>
                <div className='p2 topic-front-page__text'>
                    <h1>{headline}</h1>
                    <p>{description}</p>
                </div>
                <Image
                    className='p2 topic-front-page__image'
                    src={image}
                    alt={alt}
                    thumbnail
                />
            </Container>
        )
    }

    return (
        <>
        </>
    );
};

export default Topic;
