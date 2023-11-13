import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className='absolute top-10 left-10 right-0 flex justify-center items-center'>
        <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`} role="alert">
            <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex rounded-full uppercase font-semibold mr-3 text-xs px-2 py-1`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className='text-left mr-2'>
                {text}
            </p>
        </div>
    </div>
  )
}

export default Alert