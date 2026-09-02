import React, { useState } from 'react';
import { REVISION_QUIZ } from '../data/lamentData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const RevisionQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const question = REVISION_QUIZ[currentQuestionIndex];
  const isAnswered = selectedAnswers[question.id] !== undefined;
  const selectedOption = selectedAnswers[question.id];

  const handleSelectOption = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers({ ...selectedAnswers, [question.id]: optionIdx });
  };

  const handleNext = () => {
    if (currentQuestionIndex < REVISION_QUIZ.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  // Calculate score
  const score = REVISION_QUIZ.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / REVISION_QUIZ.length) * 100);

  return (
    <div className="max-w-4xl mx-auto my-6 px-4 sm:px-6">
      <div className="bg-[#161b22] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-950 border border-amber-500/40 text-amber-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-100">
                English Literature Revision Quiz
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Test your knowledge of Gillian Clarke's *Lament* techniques, context & quotes
              </p>
            </div>
          </div>

          <button
            onClick={handleResetQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition-colors"
            id="quiz-reset-button"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Quiz</span>
          </button>
        </div>

        {!showResults ? (
          <div>
            {/* Question Progress Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Question {currentQuestionIndex + 1} of {REVISION_QUIZ.length}</span>
              <span className="font-mono text-teal-400">Testing: {question.techniqueTested}</span>
            </div>
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-6 border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-amber-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / REVISION_QUIZ.length) * 100}%` }}
              />
            </div>

            {/* Question Box */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 mb-6">
              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-100 leading-relaxed">
                {question.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctAnswer;
                let optionStyle = 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900';

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/70 border-emerald-500/80 text-emerald-200 ring-1 ring-emerald-500/50';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-950/70 border-rose-500/80 text-rose-200 ring-1 ring-rose-500/50';
                  } else {
                    optionStyle = 'bg-slate-900/40 border-slate-900 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                    id={`quiz-option-${currentQuestionIndex}-${idx}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed mb-6 ${
                  selectedOption === question.correctAnswer
                    ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-800/50 text-rose-300'
                }`}
              >
                <div className="font-bold font-serif mb-1">
                  {selectedOption === question.correctAnswer ? 'Correct Analysis!' : 'Revision Note:'}
                </div>
                {question.explanation}
              </motion.div>
            )}

            {/* Next / Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  isAnswered
                    ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
                id="quiz-next-button"
              >
                <span>{currentQuestionIndex < REVISION_QUIZ.length - 1 ? 'Next Question' : 'View Final Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* RESULTS SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-teal-950 border-2 border-teal-400 text-teal-300 mx-auto flex items-center justify-center shadow-2xl">
              <Trophy className="w-10 h-10 text-amber-400" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-slate-100">
                Revision Quiz Completed!
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Here is your secondary literature mastery score for Gillian Clarke's *Lament*:
              </p>
            </div>

            <div className="inline-block p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
              <div className="text-4xl font-extrabold text-teal-300 font-mono">
                {score} / {REVISION_QUIZ.length}
              </div>
              <div className="text-sm font-semibold text-amber-400 flex items-center justify-center gap-1.5">
                <Award className="w-4 h-4" />
                {percentage >= 85 ? 'Grade 9 Distinction' : percentage >= 70 ? 'Grade 7 Merit' : 'Pass / Needs Review'} ({percentage}%)
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              {percentage >= 80
                ? 'Outstanding work! You have mastered the poetic devices, historical Gulf War context, and structural elegy form of Lament.'
                : 'Good effort! Revisit the interactive stanza map and read the overarching analysis to sharpen your technique definitions.'}
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={handleResetQuiz}
                className="px-6 py-2.5 rounded-xl bg-teal-950 hover:bg-teal-900 border border-teal-500/50 text-teal-200 text-xs font-semibold transition-all"
                id="quiz-retry-button"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
