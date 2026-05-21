import logoImg from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
            <img src={logoImg} alt='Quiz header logo of the main page'/>
            <h1>ReactQuiz</h1>
        </header>
    )

}