import React from 'react';
import classNames from 'classnames';
import Cleave from 'cleave.js/react';

let getInputGroupClasses = ({isDirty, hasFloatingLabel, placeholder}) => classNames('input-group', {
  'is-dirty': isDirty || placeholder,
  'has-floating-label': hasFloatingLabel
});

let getErrorClasses = ({isValid, isPristine}) => classNames({
  'red-box-shadow-1': !isValid && !isPristine,
});

let getErrorMessage = ({isValid, isPristine, errorMessage}) => (!isValid && !isPristine && errorMessage)
  ? <div className="mt1/2 fz2 red">{errorMessage}</div>
  : '';

let getLabelClasses = ({hasFloatingLabel}) => classNames('label', {
  'is-floating': hasFloatingLabel
});

function MaskedInput(props) {
  return (
    <div className={getInputGroupClasses(props)}>
      <div className={getErrorClasses(props)}>
        <label className={getLabelClasses(props)}>
          {props.label}
        </label>
        <Cleave 
          placeholder={props.placeholder}
          options={props.options}
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

MaskedInput.defaultProps = { 
  type: "text",
  hasFloatingLabel: true,
  options: {}
}

export default MaskedInput;
