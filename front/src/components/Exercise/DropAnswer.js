import React from 'react';
import PropTypes from 'prop-types';

import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import Answer from 'src/containers/Exercise/Answer';
import './styles.scss';

const DropAnswer = ({
  possibleAnswers,
  userAnswers,
  questionId,
}) => (
  <Droppable droppableId="user-answers">
    {(provided, snapshot) => (
      <span
        className={
          classNames(
            'exercise-section__questions__question__drop-area',
            {
              'exercise-section__questions__question__drop-area--hovered': snapshot.isDraggingOver,
            },
          )
        }
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        Drop me here
        {provided.placeholder}
        {
          userAnswers.map((answerId, index) => (
            <Answer
              answer={possibleAnswers.find((answer) => (
                answer.id === answerId
              ))}
              userAnswers={userAnswers}
              isUserAnswer
              questionId={questionId}
              index={index}
              isDragDisabled
              key={answerId}
            />
          ))
        }
      </span>
    )}
  </Droppable>
);

DropAnswer.propTypes = {
  possibleAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
  userAnswers: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default DropAnswer;
