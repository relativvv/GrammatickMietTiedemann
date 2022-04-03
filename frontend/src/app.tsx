import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from "./components/header/header";

const app: FC<Record<string, never>> = () => {
    return (
        <>
            <Header />
        </>
    )
};

export default app;
