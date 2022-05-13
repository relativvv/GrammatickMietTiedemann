import React, { useState } from "react";
import './inputAnswer.scss';

const InputAnswer = () => {

    const tempQuestions = ['', '','','',]
    const [writtenAnswers, setWrittenAnswers] = useState<Array<string>>(tempQuestions?.map(() => ''));
  
    const mergeAnswers = (answer:string, index:number) => {
        if (writtenAnswers?.length > (index -1)) {
            setWrittenAnswers((prevState) => {
                const tempState = [...prevState];
                tempState[index] = answer;    
                return tempState;
            });
        }
    }

    return (
        <div className="inputAnswer">
            <div className="headline">
                Headline
            </div>
            <div className="content">
                <div className="question">
                    <div>Fragestellung:</div>
                    <div>Frage</div>
                </div>
                <div className="answer-field input-wrapper">
                    <input id="answer" placeholder=" " onChange={(value) => {mergeAnswers(value.target.value, 3)}}></input>
                    <label htmlFor="answer">Antwort:</label>
                </div>
                <div className="submit-button">
                    <button className="btn btn-success">Absenden</button>
                </div>
            </div>
        </div>
    );
};

export default InputAnswer;