import React from 'react';

import { LoginInput, InputLabel, InputContainer } from './styles';

const Input = ({ ...props }) => {
  const { text } = props;
  return (
    <InputContainer>
      <InputLabel>{text}</InputLabel>
      <LoginInput {...props} autoCorrect={false} />
    </InputContainer>
  );
};

export default Input;
