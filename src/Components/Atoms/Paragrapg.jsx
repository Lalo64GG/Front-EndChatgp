import React from 'react'

export const Paragrapg = ({ customStyle, children }) => {
  return (
    <p className={`${ customStyle ? customStyle: ' text-center font-normal text-gray-100' }`}>
        {children}
    </p>
  )
}
