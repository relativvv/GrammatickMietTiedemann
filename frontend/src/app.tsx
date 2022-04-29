import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";
import Description from "./components/description/description";
import {Container} from "react-bootstrap";
import Topic from "./components/topic/topic";

const app: FC<Record<string, never>> = () => {
    return (
        <>
            <Header />
            <Container className='container'>
                <Description />
                <Topic
                    frontPage
                    image='https://www.kapiert.de/media/image/AB1FDD01/A4ED779D/79386D4A/3B422604.png'
                    alt='dass/das Bild'
                    headline='Dass oder das?'
                    description='In jedem Fall bezieht sich ein “das” auf ein Nomen und lässt sich durch “dieses”, “jenes” oder “welches” ersetzen. Da sich das “dass” auf kein Nomen bezieht, sondern als Konjunktion einen Nebensatz einleitet, lässt es sich durch kein anderes Wort ersetzen.'
                />
            </Container>
        </>
    )
};

export default app;
