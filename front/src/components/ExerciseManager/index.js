import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt from 'react-router-navigation-prompt';

import Question from 'src/containers/ExerciseManager/QuestionManager';
import ThemeManager from 'src/containers/ExerciseManager/ThemeManager';
import TextField from './TextField';
import Modal from './Modal';
import './styles.scss';

const ExerciseManager = ({
  loading,
  updateLoading,
  error,
  changeValue,
  title,
  brief,
  questions,
  createQuestion,
  published,
  saveOnBlur,
  isSaved,
  createExercise,
  removeExercise,
}) => {
  useEffect(() => {
    createExercise();
  }, []);

  if (loading) {
    return (<p>Chargement en cours</p>);
  }

  if (error) {
    return (<p>Il y a eu un problème</p>);
  }

  return (
    <section className="admin-exercise">
      <NavigationPrompt when={!published}>
        {({ onConfirm }, onCancel) => (
          <Modal
            onConfirm={onConfirm}
            onCancel={onCancel}
            removeExercise={removeExercise}
          />
        )}
      </NavigationPrompt>
      <h1 className="admin-exercise__heading-page">Créer un exercice</h1>
      <p>Statut de l'exercice : sauvegardé en brouillon</p>
      <form>
        <section>
          <article className="admin-exercise__general-info">
            <button
              className="admin-exercise__btn-remove"
              type="button"
              onClick={removeExercise}
            >
              Supprimer l'exercice
            </button>
            <TextField
              className="admin-exercise__general-info__field-group"
              id="exercise-title"
              label="Titre"
              type="text"
              autocomplete="off"
              name="title"
              value={title}
              changeValue={changeValue}
              isSaved={isSaved}
              saveOnBlur={saveOnBlur}
              updateLoading={updateLoading}
            />

            <TextField
              className="admin-exercise__general-info__field-group"
              id="exercise-intro"
              label="Intro"
              type="textarea"
              autocomplete="off"
              name="brief"
              value={brief}
              changeValue={changeValue}
              isSaved={isSaved}
              saveOnBlur={saveOnBlur}
              updateLoading={updateLoading}
            />

            <ThemeManager />
          </article>

          {
            questions.map((question, index) => (
              <Question id={question.id} questionNumber={index + 1} key={question.id} />
            ))
          }

          <button
            className="admin-exercise__btn-add"
            type="button"
            onClick={createQuestion}
          >
            Ajouter une question supplémentaire
          </button>
        </section>
      </form>
    </section>
  );
};

ExerciseManager.propTypes = {
  loading: PropTypes.bool.isRequired,
  updateLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  createQuestion: PropTypes.func.isRequired,
  published: PropTypes.bool.isRequired,
  saveOnBlur: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  createExercise: PropTypes.func.isRequired,
  removeExercise: PropTypes.func.isRequired,
};

export default ExerciseManager;