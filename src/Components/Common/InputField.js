import React from 'react';

const InputField = ({handleChange, title, type, name, placeholder, autofocus, className}) => (
  <div className='form-field-envelop'>
    <label className='label'>
      {title}
      <input className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autofocus}
        onChange={handleChange} />     
    </label>
  </div>
)

export default InputField;