import React from 'react';
import classNames from 'classnames';

let getInputGroupClasses = ({isDirty, hasFloatingLabel}) => classNames('input-group', {
  'is-dirty': isDirty,
  'has-floating-label': hasFloatingLabel
});

let getErrorClasses = ({isValid, isPristine}) => classNames({
  'red-box-shadow-1': !isValid && !isPristine,
});

let getErrorMessage = ({isValid, isPristine, errorMessage}) => {
  return (!isValid && !isPristine && errorMessage)
    ? <div className="mt1/2 fz2 red">{errorMessage}</div>
    : '';
}

let getLabelClasses = ({hasFloatingLabel}) => classNames('label', {
  'is-floating': hasFloatingLabel
});

function Input(props) {
  return (
    <div className={getInputGroupClasses(props)}>
      <div className={getErrorClasses(props)}>
        <label className={getLabelClasses(props)}>
          {props.label}
        </label>
        <input
          className="input"
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={(e) => props.onChange(e)}
          onFocus={(e) => props.onFocus(e)}
          onBlur={(e) => props.onBlur(e)}
        />
      </div>
      {getErrorMessage(props)}
    </div>
  )
}

Input.defaultProps = { 
  type: "text",
  hasFloatingLabel: true
}

export default Input;
