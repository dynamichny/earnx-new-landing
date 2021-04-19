import React from 'react'

export default function FormInput({label, placeholder, id, type, }) {
  return (
    <div className="forminput--wrapper">
      <label>{label}</label>
      {type != 'textarea' ? (
        <input type={type} placeholder={placeholder} />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
    </div>
  )
}
