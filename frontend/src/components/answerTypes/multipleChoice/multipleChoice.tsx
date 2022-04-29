import React, {FC, useState} from 'react';
import './multipleChoice.scss';

const MultipleChoice: FC = () => {

    const tempAnswers = ['Antwort 1', 'Antwort 2', 'Antwort 3'];

    const [inputValue, setInputValue] = useState();

    return (
        <div className="multiple-choice">
            <h2>Multiple Choice</h2>
            <h4>Fragestellung</h4>
            {tempAnswers.map(a =>
                <div className="multiple-choice__answers">
                    <input className="multiple-choice__answers__checkbox" type="checkbox"/>
                    <label className="multiple-choice__answers__label">{a}</label>
                </div>
            )}
            <button className="multiple-choice__button" onClick={() => console.log('TODO')}>success</button>
        </div>
    );
};

export default MultipleChoice;
