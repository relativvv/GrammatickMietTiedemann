import React from 'react';
import './link.scss';

type linkProps = {
    text: string,
    variant: string,
    link: string
}

const getClassName = (className: string) => className === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';

const Link = ({text, variant, link}: linkProps) => {
    return (
        <>
            <a href={link} className={getClassName(variant)}>{text}</a>
        </>
    )
};

export default Link;
