import React from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';
import CheckboxRadio from './CheckboxRadio';
import './styles.scss';

const AnswerManager = ({
  content,
  correct,
  questionNumber,
  answerNumber,
  changeValue,
  removeAnswer,
  saveOnBlur,
  isSaved,
}) => (
  <div className="admin-exercise__question__answers__answer">
    <fieldset>
      <legend>Réponse {answerNumber}</legend>
      <button type="button" onClick={removeAnswer}>
        Supprimer
          <span className="sr-only">Question {questionNumber}</span>
      </button>
      <TextField
        className="admin-exercise__question__general-info__field-group"
        id={`exercise-q${questionNumber}-r${answerNumber}-content`}
        label="Contenu"
        type="text"
        autocomplete="off"
        name="content"
        value={content}
        changeValue={changeValue}
        isSaved={isSaved}
        saveOnBlur={saveOnBlur}
      />

      <CheckboxRadio
        className="admin-exercise__question__general-info__field-group"
        id={`exercise-q${questionNumber}-r${answerNumber}-correct`}
        label="Bonne réponse"
        type="checkbox"
        name="correct"
        value={correct}
        changeValue={changeValue}
        isSaved={isSaved}
        saveOnBlur={saveOnBlur}
      />
    </fieldset>
  </div>
);

AnswerManager.propTypes = {
  content: PropTypes.number.isRequired,
  correct: PropTypes.bool.isRequired,
  questionNumber: PropTypes.number.isRequired,
  answerNumber: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  removeAnswer: PropTypes.func.isRequired,
  saveOnBlur: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default AnswerManager;