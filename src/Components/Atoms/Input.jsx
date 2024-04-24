import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Input = ({ placeholder, type, customStyle, icon, setState }) => {
  return (
    <div className="relative">
    {icon && (
      <span className="absolute inset-y-0 left-2  flex items-center text-gray-500">
        <FontAwesomeIcon icon={icon} />
      </span>
    )}
      <input
        className={`px-8 py-2 border rounded-md w-full ${ customStyle ? customStyle : '  '}`}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
    />
  </div>
  )
}
