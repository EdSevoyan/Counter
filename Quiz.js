import { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    title: 'React - это ․․․',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0
  },
  {
    title: 'Компонент - это ․․․',
    variants: ['приложение', 'часть приложения', 'я не знаю что такое'],
    correct: 1
  },
  {
    title: 'JSX - это ․․․',
    variants: ['формат', 'язык програмирования', 'разметка'],
    correct: 2
  },
  {
    title: 'CSS - это ․․․',
    variants: ['приложение', 'каскад стилей', 'основа страницы'],
    correct: 1
  },
  {
    title: 'HTML - это ․․․',
    variants: ['основа страницы', 'часть приложения', 'каскад стилей'],
    correct: 0
  },
];

function Result({ correct }) {
  return (
    <div className='result'>
      <img src="https://media.istockphoto.com/id/1125716911/vector/party-popper-with-confetti.jpg?s=612x612&w=0&k=20&c=sAyofM-MQ5TL-pLyFseV9Vke_W2zyYX1btP90oGJQZE=" alt="" />
      <h2>vi otgadali {correct} iz {questions.length}</h2>
      <a href="/">
        <button>poprobavat' snova</button>
      </a>
    </div>
  )
}

function Game({ question, onClickVariant, step }) {
  const percent = Math.round((step / questions.length) * 100);
  return (
    <div className='game'>
      <div className='progress'>
        <div className='progress-bar' style={{ width: `${percent}%` }}>

        </div>
      </div>
      <h1>{question.title}</h1>
      <div className='ul'>
        {
          question.variants.map((text, index) => (
            <div key={text} onClick={() => onClickVariant(index)}>{text}</div>
          ))
        }
      </div>
    </div>
  )
}

export default function Quiz() {

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className='Quiz'>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (<Result correct={correct} />)}
    </div>
  )
}
