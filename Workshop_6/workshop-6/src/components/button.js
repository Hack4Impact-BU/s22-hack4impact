import View from 'react';

function Button(props) {
  return (
    <View style={{justifyContent: 'center'}}>
      <button
        style={{
          backgroundColor: props.color,
        }}
      >
        {props.text}
      </button>
    </View>
  );
}

export default Button;
