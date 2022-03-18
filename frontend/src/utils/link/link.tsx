import React from 'react';
import './link.scss';

type linkProps = {
    text: string,
    variant: string,
    link: string
}

const Link = ({text, variant, link}: linkProps) => {
    const classNames = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';

    return (
        <>
            <a href={link} className={classNames}>{text}</a>
        </>
    )
};

export default Link;
