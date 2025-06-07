import React, { useState } from 'react';
import './App.css';

const GradeCalculator = () => {
  const [quizGrade, setQuizGrade] = useState('');
  const [labGrade, setLabGrade] = useState('');
  const [finalExamGrade, setFinalExamGrade] = useState('');
  const [overallGrade, setOverallGrade] = useState(null);
  const [fourPointGrade, setFourPointGrade] = useState(null);

  const calculateFourPointScale = (grade) => {
    const numGrade = parseFloat(grade);
    
    if (numGrade >= 50 && numGrade <= 74.5) return 0;
    if (numGrade >= 74.51 && numGrade <= 76.5) return 1;
    if (numGrade >= 76.51 && numGrade <= 78.5) return 1.25;
    if (numGrade >= 78.51 && numGrade <= 80.5) return 1.5;
    if (numGrade >= 80.51 && numGrade <= 82.5) return 1.75;
    if (numGrade >= 82.51 && numGrade <= 84.5) return 2;
    if (numGrade >= 84.51 && numGrade <= 86.5) return 2.25;
    if (numGrade >= 86.51 && numGrade <= 88.5) return 2.5;
    if (numGrade >= 88.51 && numGrade <= 90.5) return 2.75;
    if (numGrade >= 90.51 && numGrade <= 92.5) return 3;
    if (numGrade >= 92.51 && numGrade <= 94.5) return 3.25;
    if (numGrade >= 94.51 && numGrade <= 96.5) return 3.5;
    if (numGrade >= 96.51 && numGrade <= 98.5) return 3.75;
    if (numGrade >= 98.51 && numGrade <= 100) return 4;
    
    return error; // Below 50
  };

  const handleSubmit = () => {
    const quiz = parseFloat(quizGrade);
    const lab = parseFloat(labGrade);
    const finalExam = parseFloat(finalExamGrade);

    if (isNaN(quiz) || isNaN(lab) || isNaN(finalExam)) {
      alert('Please enter valid numbers for all grades');
      return;
    }

    if (quiz < 0 || quiz > 100 || lab < 0 || lab > 100 || finalExam < 0 || finalExam > 100) {
      alert('Please enter grades between 0 and 100');
      return;
    }

    const overall = (quiz * 0.3) + (lab * 0.3) + (finalExam * 0.4);
    const fourPoint = calculateFourPointScale(overall);

    setOverallGrade(Math.round(overall * 100) / 100); // 2 decimal places
    setFourPointGrade(fourPoint);
  };

  const handleLogout = () => {
    setQuizGrade('');
    setLabGrade('');
    setFinalExamGrade('');
    setOverallGrade(null);
    setFourPointGrade(null);
  };

  return (
    <div className="main-container">
      <div className="calculator-card">
        <h1 className="title">
          Grades Calculator
        </h1>

        <div className="form-container">
          <div className="input-group">
            <label className="label">
              Quizzes
            </label>
            <input
              type="number"
              value={quizGrade}
              onChange={(e) => setQuizGrade(e.target.value)}
              className="input"
              placeholder="Enter quiz grade"
              min="0"
              max="100"
            />
          </div>

          <div className="input-group">
            <label className="label">
              Lab Activities
            </label>
            <input
              type="number"
              value={labGrade}
              onChange={(e) => setLabGrade(e.target.value)}
              className="input"
              placeholder="Enter lab grade"
              min="0"
              max="100"
            />
          </div>

          <div className="input-group">
            <label className="label">
              Final Exam
            </label>
            <input
              type="number"
              value={finalExamGrade}
              onChange={(e) => setFinalExamGrade(e.target.value)}
              className="input"
              placeholder="Enter final exam grade"
              min="0"
              max="100"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>

          {overallGrade !== null && fourPointGrade !== null && (
            <div className="results-container">
              <div className="results-content">
                <p className="result-item">
                  Grade: <span className="result-value">{overallGrade}</span>
                </p>
                <p className="result-item">
                  Final Grade: <span className="result-value">{fourPointGrade.toFixed(2)}</span>
                </p>
              </div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradeCalculator;


