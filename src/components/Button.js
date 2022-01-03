const Button = ({ title, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {title}
    </button>
  );
};

export default Button;
