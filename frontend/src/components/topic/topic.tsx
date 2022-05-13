import React from 'react';
import './topic.scss';
import {Container, Image} from "react-bootstrap";

type TopicProps = {
    frontPage: boolean,
    id: number,
    image: string,
    alt: string,
    headline: string,
    description: string,
    setIsFrontPage: () => {}
};

const Topic: React.FunctionComponent<TopicProps> = ({
                                                        frontPage,
                                                        id,
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
                onClick={() => setIsFrontPage(id)}
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
                <div className='topic__image-container'>
                    <Image
                        className='topic__image'
                        src={image}
                        alt={alt}
                        thumbnail
                    />
                </div>

                <h1 className='topic__headline'>{headline}</h1>
                <p dangerouslySetInnerHTML={{
                    __html: description.replaceAll('\n', '<br/>') }}
                />
            </Container>
        </>
    );
};

export default Topic;
