"use client";

import { useMemo, useState } from "react";

type Personality =
  | "classic"
  | "sweet"
  | "talker"
  | "aesthete";

type Answer = {
  label: string;
  personality: Personality;
  icon: "cup" | "sparkles" | "chat" | "gem";
};

type Question = {
  text: string;
  answers: Answer[];
};

const results: Record<
  Personality,
  {
    name: string;
    coffee: string;
    description: string;
    position: string;
  }
> = {
  classic: {
    name: "Образцовый Классик",
    coffee: "Фильтр",
    description:
      "Ты ценишь понятный ритуал, стабильность и хороший кофе без лишнего шума.",
    position: "left top"
  },
  sweet: {
    name: "Сладкий Энтузиаст",
    coffee: "Латте на кокосовом",
    description:
      "Ты любишь мягкость, настроение и маленькие радости в течение дня.",
    position: "right top"
  },
  talker: {
    name: "Кофейный Собеседник",
    coffee: "Капучино",
    description: "Хороший разговор начинается с хорошей чашки.",
    position: "left bottom"
  },
  aesthete: {
    name: "Чувственный Эстет",
    coffee: "Раф кофе",
    description:
      "Ты выбираешь комфорт, красоту деталей и мягкий вкус с характером.",
    position: "right bottom"
  }
};

const tieOrder: Personality[] = ["classic", "sweet", "talker", "aesthete"];

const questions: Question[] = [
  {
    text: "Как начинается твой идеальный выходной?",
    answers: [
      { label: "Спокойно, с любимым ритуалом", personality: "classic", icon: "cup" },
      { label: "С чем-то сладким и новым", personality: "sweet", icon: "sparkles" },
      { label: "За разговором с близким человеком", personality: "talker", icon: "chat" },
      { label: "Красиво, медленно, со вкусом", personality: "aesthete", icon: "gem" }
    ]
  },
  {
    text: "Какой фильм ты выберешь вечером?",
    answers: [
      { label: "Проверенную классику, которую приятно пересматривать", personality: "classic", icon: "cup" },
      { label: "Легкую романтическую комедию или feel-good кино", personality: "sweet", icon: "sparkles" },
      { label: "Что-то, что потом хочется обсудить с друзьями", personality: "talker", icon: "chat" },
      { label: "Красивую драму с атмосферой и деталями", personality: "aesthete", icon: "gem" }
    ]
  },
  {
    text: "Что тебе ближе в поездке?",
    answers: [
      { label: "Знакомый маршрут, хороший отель, все продумано", personality: "classic", icon: "cup" },
      { label: "Пробовать десерты, напитки и милые места", personality: "sweet", icon: "sparkles" },
      { label: "Знакомиться с людьми и находить локальные истории", personality: "talker", icon: "chat" },
      { label: "Искать красивые улицы, музеи и тихие дворики", personality: "aesthete", icon: "gem" }
    ]
  },
  {
    text: "Выбери предмет для рабочего стола",
    answers: [
      { label: "Хорошая кружка, которой пользуешься каждый день", personality: "classic", icon: "cup" },
      { label: "Маленькая приятная штука для настроения", personality: "sweet", icon: "sparkles" },
      { label: "Блокнот для идей и разговоров", personality: "talker", icon: "chat" },
      { label: "Красивый минималистичный объект", personality: "aesthete", icon: "gem" }
    ]
  },
  {
    text: "Что тебя цепляет в кофейне?",
    answers: [
      { label: "Стабильно хороший вкус", personality: "classic", icon: "cup" },
      { label: "Мягкие сладкие напитки и сезонные новинки", personality: "sweet", icon: "sparkles" },
      { label: "Бариста, которые помнят тебя и твой заказ", personality: "talker", icon: "chat" },
      { label: "Атмосфера, свет, посуда и детали", personality: "aesthete", icon: "gem" }
    ]
  },
  {
    text: "Какой комплимент тебе ближе?",
    answers: [
      { label: "На тебя можно положиться", personality: "classic", icon: "cup" },
      { label: "С тобой становится теплее", personality: "sweet", icon: "sparkles" },
      { label: "С тобой легко говорить", personality: "talker", icon: "chat" },
      { label: "У тебя тонкий вкус", personality: "aesthete", icon: "gem" }
    ]
  }
];

function Icon({ type }: { type: Answer["icon"] }) {
  if (type === "sparkles") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l1.7 4.8L18.5 9.5l-4.8 1.7L12 16l-1.7-4.8-4.8-1.7 4.8-1.7L12 3z" />
        <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5h14v9H9l-4 3v-12z" />
      </svg>
    );
  }

  if (type === "gem") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 4.5h11L21 9l-9 11L3 9l3.5-4.5z" />
        <path d="M3 9h18M8 4.5L12 20l4-15.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h11v5a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V8z" />
      <path d="M17 10h1.5a2 2 0 0 1 0 4H17" />
      <path d="M7 21h10" />
    </svg>
  );
}

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Personality[]>([]);

  const isComplete = questionIndex >= questions.length;

  const winner = useMemo(() => {
    const scores = tieOrder.reduce<Record<Personality, number>>((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {} as Record<Personality, number>);

    answers.forEach((answer) => {
      scores[answer] += 1;
    });

    return tieOrder.reduce((best, key) => {
      return scores[key] > scores[best] ? key : best;
    }, tieOrder[0]);
  }, [answers]);

  const restart = () => {
    setAnswers([]);
    setQuestionIndex(0);
  };

  const chooseAnswer = (personality: Personality) => {
    setAnswers((current) => [...current, personality]);
    setQuestionIndex((current) => current + 1);
  };

  const progress = Math.min(questionIndex + 1, questions.length);
  const currentQuestion = questions[questionIndex];
  const result = results[winner];

  return (
    <main className="shell">
      <section className="quiz-panel">
        <p className="eyebrow">Basecamp Coffee</p>

        {!isComplete ? (
          <>
            <div className="progress-row">
              <span>Вопрос {progress} из {questions.length}</span>
              <span>{Math.round((questionIndex / questions.length) * 100)}%</span>
            </div>
            <div className="progress-track" aria-hidden="true">
              <div
                className="progress-fill"
                style={{ width: `${(questionIndex / questions.length) * 100}%` }}
              />
            </div>

            <h1>{currentQuestion.text}</h1>
            <p className="intro">Выбирай, здесь нет неправильных ответов, только твой кофейный ритм.</p>

            <div className="answers">
              {currentQuestion.answers.map((answer) => (
                <button
                  className={`answer answer-${answer.icon}`}
                  key={answer.label}
                  onClick={() => chooseAnswer(answer.personality)}
                  type="button"
                >
                  <span className="answer-icon">
                    <Icon type={answer.icon} />
                  </span>
                  <span>{answer.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="result-layout">
            <div>
              <p className="result-label">Твой результат</p>
              <h1>Ты - {result.name}</h1>
              <p className="coffee">Твой кофе: {result.coffee}</p>
              <p className="intro">{result.description}</p>
              <button className="restart" onClick={restart} type="button">
                Пройти еще раз
              </button>
            </div>
            <div
              className="drink-image"
              role="img"
              aria-label={`${result.coffee} для результата ${result.name}`}
              style={{ backgroundPosition: result.position }}
            />
          </div>
        )}
      </section>
    </main>
  );
}
