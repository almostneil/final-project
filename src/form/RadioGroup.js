import React from 'react';
import classNames from 'classnames';

let getErrorClasses = ({isValid, isPristine}) => classNames({
  'red-box-shadow-1': !isValid && !isPristine,
});

let mapOptions = ({options, name, value, onChange, onFocus, onBlur}) => options.map(item => {
  return (
    <div key={item.value} className="fz2-1/2 mb1/2">
      <label>
        <input type="radio" 
          name={name} 
          value={item.value} 
          onChange={(e) => onChange(e)}
          onFocus={(e) => onFocus(e)}
          onBlur={(e) => onBlur(e)}
          checked={item.value === value}
          className="mr1"
        />{item.label}
      </label>
    </div>
  )
});

function RadioGroup(props) {
  return (
    <div className="input-group">
      <div className={getErrorClasses(props)}>
        <div className="label pl0 pt0">
          {props.label}
        </div>
        <div>
          {mapOptions(props)}
        </div>
      </div>
    </div>
  )
}

export default RadioGroup;
