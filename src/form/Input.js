import React from 'react';
import classNames from 'classnames';

let getInputGroupClasses = ({isDirty, hasFloatingLabel, inputGroupClass}) => classNames('input-group', inputGroupClass, {
  'is-dirty': isDirty,
  'has-floating-label': hasFloatingLabel
});

let getErrorClasses = ({isRequired, isValid, isPristine}) => classNames({
  'red-box-shadow-1': isRequired && !isValid && !isPristine,
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
  hasFloatingLabel: true,
  inputGroupClass: '',
  isRequired: true
}

export default Input;
