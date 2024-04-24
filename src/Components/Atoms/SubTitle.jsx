export const SubTitle = ({children, customStyles}) => {
  return (
    <h2 className={` ${customStyles ? customStyles : ' text-center text-black'} `}>
        {children}
    </h2>
  )
}
