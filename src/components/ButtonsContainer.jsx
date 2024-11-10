const ButtonsContainer = () => {
  const buttonNames = ["AC", "C", "%", "^", "!", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "e", "(", ")", "sin", "cos", "tan", "log", "sqrt", "pi"];

  return (
    <div className="buttons-container">
      {buttonNames.map((name) => <button key={name} className="button">{name}</button>)}
    </div>
  );
};

export default ButtonsContainer;
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid architecto iste sint non, tenetur similique possimus voluptate praesentium reprehenderit quaerat 