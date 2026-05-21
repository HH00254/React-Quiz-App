import { useState, useCallback } from "react"
import QUESTIONS from './../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]); // 1 to 1 question and answer IE if we have given two answer we must be on the next question

    const activeQuestionIndex = userAnswers.length// Is based off of how many answers have been given
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(currentAnswer) {

            setUserAnswers((prevAnswers) => {
                return [...prevAnswers, currentAnswer]
            });

        }, []
    );

    const handleSkipAnswer =
        useCallback(() => handleSelectAnswer(null),
            [handleSelectAnswer]
        );

    return (
        <div id="quiz">

            {quizIsComplete ?
                <Summary
                    userAnswers={userAnswers}
                />
                :
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSkipAnswer={handleSkipAnswer}
                    onSelectAnswer={handleSelectAnswer}
                />
            }

        </div>

    )
}


