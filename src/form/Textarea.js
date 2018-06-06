import React from 'react';
import classNames from 'classnames';

let getInputGroupClasses = ({isDirty, hasFloatingLabel}) => classNames('input-group', {
  'is-dirty': isDirty,
  'has-floating-label': hasFloatingLabel
});

let getLabelClasses = ({hasFloatingLabel}) => classNames('label', {
  'is-floating': hasFloatingLabel,
  'px0 pt0 pb1/2': !hasFloatingLabel
});

let getErrorClasses = ({isValid, isPristine}) => classNames({
  'red-box-shadow-1': !isValid && !isPristine,
});

let getErrorMessage = ({isValid, isPristine, errorMessage}) => {
  return (!isValid && !isPristine && errorMessage)
    ? <div className="mt1/2 fz2 red">{errorMessage}</div>
    : '';
}

function Textarea(props) {
  return (
    <div className={getInputGroupClasses(props)}>
      <div className={getErrorClasses(props)}>
        {
          (props.label)
            ? <label className={getLabelClasses(props)}>{props.label}</label>
            : null
        }
        <textarea
          className="input"
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

Textarea.defaultProps = { 
  hasFloatingLabel: true
}

export default Textarea;
