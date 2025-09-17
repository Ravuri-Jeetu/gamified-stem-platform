import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Logo from '../assets/hero-image.svg'; // Using an existing SVG as a placeholder

const QuizDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({}); // To store user's answers

  // Placeholder for quiz data - in a real application, this would come from an API call
  const sampleQuiz = {
    id: 1,
    title: 'React Basics',
    category: 'Programming',
    difficulty: 'easy',
    duration: '30 minutes',
    questions: [
      {
        id: 1,
        question: 'What is React?',
        options: ['A JavaScript library for building user interfaces', 'A backend framework', 'A database', 'An operating system'],
        correctAnswer: 'A JavaScript library for building user interfaces',
        explanation: 'React is a popular JavaScript library for building interactive user interfaces.'
      },
      {
        id: 2,
        question: 'What is JSX?',
        options: ['A JavaScript extension', 'A styling language', 'A data format', 'A testing framework'],
        correctAnswer: 'A JavaScript extension',
        explanation: 'JSX is a syntax extension for JavaScript, often used with React to describe what the UI should look like.'
      },
      {
        id: 3,
        question: 'What is a React Component?',
        options: ['A function or a class that optionally takes input and returns a React element', 'A built-in HTML tag', 'A CSS style rule', 'A database query'],
        correctAnswer: 'A function or a class that optionally takes input and returns a React element',
        explanation: 'React components are independent, reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render function.'
      }
    ]
  };

  React.useEffect(() => {
    // In a real app, you'd fetch quiz data based on the 'id' param
    setQuiz(sampleQuiz);
  }, [id]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    setAnswers(prev => ({ ...prev, [quiz.questions[currentQuestionIndex].id]: selectedAnswer }));
    if (selectedAnswer === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[quiz.questions[currentQuestionIndex - 1].id] || null);
    }
  };

  const handleSubmitQuiz = () => {
    // Calculate final score and show results
    setAnswers(prev => ({ ...prev, [quiz.questions[currentQuestionIndex].id]: selectedAnswer }));
    if (selectedAnswer === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
    setShowResults(true);
  };

  if (!quiz) {
    return <div className="text-center text-gray-700 dark:text-gray-300">Loading quiz...</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-8">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="EduQuest Logo" className="h-16" />
        </div>
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">
          {t('quizDetailPage.title')}
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t('quizDetailPage.description')}
        </p>

        {!showResults ? (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">{t('quizDetailPage.quizTitle')}: {quiz.title}</h2>
            <p className="text-gray-700 dark:text-gray-300"><strong>{t('quizDetailPage.category')}:</strong> {quiz.category}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>{t('quizDetailPage.difficulty')}:</strong> {t(`quizListPage.${quiz.difficulty}`)}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>{t('quizDetailPage.duration')}:</strong> {quiz.duration}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>{t('quizDetailPage.questions')}:</strong> {quiz.questions.length}</p>

            <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('quizDetailPage.question')} {currentQuestionIndex + 1} of {quiz.questions.length}</h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">{currentQuestion.question}</p>
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 border rounded-lg transition duration-300
                      ${selectedAnswer === option
                        ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-700'}
                      border-gray-300 dark:border-gray-700`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  {t('quizDetailPage.previousQuestion')}
                </button>
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                  >
                    {t('quizDetailPage.nextQuestion')}
                  </button>
                ) : (
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    onClick={handleSubmitQuiz}
                    disabled={selectedAnswer === null}
                  >
                    {t('quizDetailPage.submitQuiz')}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">{t('quizDetailPage.yourScore')}</h2>
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">{score} / {quiz.questions.length}</p>
            <p className="text-xl text-gray-700 dark:text-gray-300">{t('quizDetailPage.correctAnswers')}: {score}</p>
            <p className="text-xl text-gray-700 dark:text-gray-300">{t('quizDetailPage.incorrectAnswers')}: {quiz.questions.length - score}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 mt-8"
              onClick={() => {
                setShowResults(false);
                setCurrentQuestionIndex(0);
                setScore(0);
                setSelectedAnswer(null);
                setAnswers({});
              }}
            >
              {t('quizDetailPage.reviewAnswers')}
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg transition duration-300 mt-4 ml-4"
              onClick={() => window.history.back()}
            >
              {t('quizDetailPage.backToQuizzes')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetailPage;