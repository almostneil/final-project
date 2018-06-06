import React from 'react';
import classNames from 'classnames';
import StarRatingComponent from 'react-star-rating-component';

let getErrorClasses = ({isValid, isPristine}) => classNames({
  'red-box-shadow-1': !isValid && !isPristine,
});

let getErrorMessage = ({isValid, isPristine, errorMessage}) => (!isValid && !isPristine && errorMessage)
  ? <div className="mt1/2 fz2 red">{errorMessage}</div>
  : '';

function StarRating(props) {
  return (
    <div className="input-group mb1">
      <div className={getErrorClasses(props)}>
        <div className="label p0">
          {props.label}
        </div>
        <div style={{fontSize: 21}}>
          <StarRatingComponent 
            name={props.name}
            value={props.value}
            onStarClick={(nextValue, prevValue, name) => props.onStarClick(nextValue)}
          />
        </div>
      </div>
      {getErrorMessage(props)}
    </div>
  )
}

export default StarRating;
