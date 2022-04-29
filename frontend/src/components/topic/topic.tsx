import React from 'react';
import './topic.scss';
import {Container, Image} from "react-bootstrap";

type TopicProps = {
    frontPage: boolean,
    image: string,
    alt: string,
    headline: string,
    description: string,
    setIsFrontPage: () => {}
};

const Topic: React.FunctionComponent<TopicProps> = ({
                                                        frontPage,
                                                        image,
                                                        alt,
                                                        headline,
                                                        description,
                                                        setIsFrontPage
                                                    }) => {
    if (frontPage) {
        return (
            <Container
                className='d-flex flex-row topic-front-page'
                // @ts-expect-error
                onClick={() => setIsFrontPage(false)}
            >
                <div className='p2 topic-front-page__text'>
                    <h1>{headline}</h1>
                    <p dangerouslySetInnerHTML={{
                        __html: `${description.substring(0, 400)} ...`.replaceAll('\n', '<br/>') }}
                    />
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
            <Container className='topic'>
                <Image
                    className='topic__image'
                    src={image}
                    alt={alt}
                    thumbnail
                />
            </Container>
        </>
    );
};

export default Topic;
