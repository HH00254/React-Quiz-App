
export default function Questions({ question, answers, selectedAnswer }) {
    return (
        <section id="question">
            
            <h2>{question}</h2>
            <ul id="answers">
                {answers.map((answer, index) =>
                    <li key={`question-${index}`} className="answer">
                        {/* <h4>Answer: {index + 1}</h4> */}
                        <button onClick={() => selectedAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                )
                }
            </ul>
        </section>
    )
}