import React, { Children } from 'react'

export const Label = ({ children, customStyle}) => {
  return (
    <label className={` block ${ customStyle ? customStyle : ' font-bold text-black'}`}>
        {children}
    </label>
  )
}
