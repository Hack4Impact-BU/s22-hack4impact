function counter(props) {
  return (
    <>
      <h3
        style={{
          textAlign: 'center',
        }}
      >
        Current Count: {props.count}
      </h3>
    </>
  );
}
export default counter;
