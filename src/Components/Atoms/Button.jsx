export const Button = ({ children, customStyle, handlePress }) => {
  return (
    <button
      className={` ${
        customStyle
          ? customStyle
          : " bg-green-400 transition-colors hover:bg-green-600"
      }`}

      onClick={handlePress}
    >
      {children}
    </button>
  );
};
