const Button = ({ onClick, buttonText, buttonText2 }) => {
  return <button onClick={onClick}>{buttonText} {buttonText2}</button>;
};

export default Button;
