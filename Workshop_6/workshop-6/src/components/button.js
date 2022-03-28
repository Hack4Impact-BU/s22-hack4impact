function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.color,
      }}
      onClick={props.myClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
