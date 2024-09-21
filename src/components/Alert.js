import React from 'react';

function Alert(props) {
    const capitalised = (sentence) =>
    {
        const text = sentence.toLowerCase();
        
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

  return (
   props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalised(props.alert.type)} </strong>! {capitalised(props.alert.msg)} 
</div>
    </div>
  );
}

export default Alert;
