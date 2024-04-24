import { HeaderText } from '../Atoms/HeaderText'
import { Paragrapg } from '../Atoms/Paragrapg'

export const ContainHeader = () => {
  return (
    <div className=' flex flex-col items-center justifu-center'>
      <HeaderText customStyle={'text-5xl text-sky-400 font-semibold'} children={'Welcome Back'}/>
      <Paragrapg customStyle={'font-medium text-lg text-gray-500 mb-2 mt-4'} children={'Welcome back! Please enter your details'}/>
      <div className=" border-2 w-40 inline-block border-sky-600 mb-2 "></div>
    </div>
  )
}
