export const HeaderText = ({ children, customStyle}) => {
  return (
    <h1 className={` ${ customStyle ? customStyle : 'text-center font-bold text-3xl text-black' } `}>
        {children}
    </h1>
  )
}
