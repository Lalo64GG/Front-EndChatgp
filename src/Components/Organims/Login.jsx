import React from 'react'
import { Form } from '../Molecules/Form'
import { SubTitle } from '../Atoms/SubTitle'
import { Paragrapg } from '../Atoms/Paragrapg'
import { Button } from '../Atoms/Button'

export const Login = () => {
  return (
    <div className=' h-screen w-full flex-1 flex p-10 '>
        <div className='w-full lg:w-9/12 flex justify-center items-center lg:bg-white rounded-l-md lg:shadow-lg'>
            <Form/>
        </div>

        <div className='hidden relative lg:flex w-2/5 h-full items-center justify-center text-white py-36 px-12 bg-sky-600 rounded-r-md shadow-lg'>
            <div className='flex flex-col items-center justify-center'>
                <SubTitle children={'Hello Friend!'} customStyles={'text-3xl text-center font-bold mb-2'}/>
                <div className=' border-2 w-10 inline-block border-white mb-2'></div>
                <Paragrapg children={'This is a web application that uses the OpenAI API which helps us ask questions about pdfs that we enter'} customStyle={'mb-2'} />
                <Button children={'Register'} customStyle={' border-white border-2 p-2 rounded-md mt-5 hover:bg-sky-800 w-32 hover:border-black'}/>
            </div>
        </div>
    </div>
  )
}
