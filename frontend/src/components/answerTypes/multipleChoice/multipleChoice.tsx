import React, {FC, useEffect, useState} from 'react';
import './multipleChoice.scss';
import {getAllCategories} from "../../../api/categories/categories";

const MultipleChoice: FC = () => {

    const tempAnswers = ['Antwort 1', 'Antwort 2', 'Antwort 3'];

    const [selectedAnswers, setSelectedAnswers] = useState<Array<number>>([]);

    const AddOrRemoveAnswer = (index: number) => {
        const foundIndex = selectedAnswers.findIndex((answer) => answer === index);

        setSelectedAnswers(foundIndex > -1
            ? selectedAnswers.filter(answer => answer !== index)
            : [...selectedAnswers, index]);
    };

    const PostMultipleChoiceAnswers = () => {

    };

    useEffect(() => {
        (async () => {
            const temp = await getAllCategories();
            console.log('temp', temp)
        })();

    }, []);

    return (
        <div className="multiple-choice">
            <h2>Multiple Choice</h2>
            <h4>Fragestellung</h4>
            <div className="multiple-choice__answers-container">
                {tempAnswers.map((answers, index) =>
                    <div
                        key={answers}
                        className="multiple-choice__answers-container__answers"
                    >
                        <input
                            className="multiple-choice__answers-container__answers__checkbox"
                            type="checkbox"
                            onClick={() => AddOrRemoveAnswer(index)}
                        />
                        <label className="multiple-choice__answers-container__answers__label">
                            {answers}
                        </label>
                    </div>
                )}
            </div>
            <button
                className="multiple-choice__button btn btn-primary"
                onClick={PostMultipleChoiceAnswers}
            >
                Bestätigen
            </button>
        </div>
    );
};

export default MultipleChoice;
