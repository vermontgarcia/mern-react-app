import React from 'react';

const ProfileField = ({title, name}) => (
  <div className='profile-field-envelop'>
    <label className='label'>
      {title}
      <p className='data'>
        {name}
        </p>     
    </label>
  </div>
)

export default ProfileField;