import React from 'react'

export default function FlashMessage({className, messgae= ''}) {
  return (
    <div className={`flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${className}`}>
        {messgae}
    </div>
  )
}
