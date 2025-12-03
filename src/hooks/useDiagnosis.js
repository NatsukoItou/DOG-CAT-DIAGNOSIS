import { useState } from "react";
import { questions } from "../data/questions";

export const useDiagnosis = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= questions.length;

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const dogCount = finalAnswers.filter((a) => a === "dog").length;
    const catCount = finalAnswers.filter((a) => a === "cat").length;
    setResult(dogCount >= catCount ? "dog" : "cat");
  };

  const resetDiagnosis = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    isFinished,
    result,
    handleAnswer,
    resetDiagnosis,
  };
};
