import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      {/* <h1 style={headerStyle}>{props.title}</h1> */}
      <h1>{title}</h1>
      <Button
        title={showAdd ? "Close" : "Add"}
        color={showAdd ? "Red" : "Green"}
        onClick={onAdd}
      />
      {/* <Button title="check2" color="green" /> */}
    </header>
  );
};

//Default props are use to
// set default value on the props.
Header.defaultProps = {
  title: "Task Tracker",
  title1: "Tannavi",
  something: "Check"
};

//INLINE JS CSS STYLE
// const headerStyle = {
//   color: "red",
//   backgroundColor: "yellow-green"
// };

export default Header;
