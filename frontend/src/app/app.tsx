import React, {useState, useEffect, FC} from 'react';
import './app.scss';
import { Button } from 'react-bootstrap';

const app: FC<Record<string, never>> = () => {
    return (
        <>
            <p>Hello World</p>
            <Button onClick={() => console.log('button')}>Tests</Button>
        </>
)};

export default app;
