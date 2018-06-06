import React from 'react';
import classNames from 'classnames';

let getInputGroupClasses = ({isDirty, hasFloatingLabel}) => classNames('input-group', {
  'is-dirty': isDirty,
  'has-floating-label': hasFloatingLabel
});

let getLabelClasses = ({hasFloatingLabel}) => classNames('label', {
  'is-floating': hasFloatingLabel
});

let getErrorClasses = ({isValid, isPristine}) => classNames({
  'red-box-shadow-1': !isValid && !isPristine,
});

let getErrorMessage = ({isValid, isPristine, errorMessage}) => {
  return (!isValid && !isPristine && errorMessage)
    ? <div className="mt1/2 fz2 red">{errorMessage}</div>
    : '';
}

let mapOptions = ({options, hasFloatingLabel}) => {
  const optionsClone = (hasFloatingLabel)
      ? [{id: "", name: "", disabled: true}, ...options]
      : [...options];
  
  return optionsClone.map((x) => {
    return <option value={x.id} key={x.id} disabled={(x.disabled)}>{x.name}</option>
  });
}

function Select(props) {
  return (
    <div className={getInputGroupClasses(props)}>
      <div className={getErrorClasses(props)}>
        <label className={getLabelClasses(props)}>
          {props.label}
        </label>
        <select
          className="select"
          name={props.name}
          value={props.value}
          onChange={(e) => props.onChange(e)}
          onFocus={(e) => props.onFocus(e)}
          onBlur={(e) => props.onBlur(e)}
        >
          {mapOptions(props)}
        </select>
      </div>
      {getErrorMessage(props)}
    </div>
  )
}

Select.defaultProps = {
  hasFloatingLabel: true
}

export default Select;
