import React from 'react';

import { LoginInput, InputLabel, InputContainer } from './styles';

const Input = ({ ...props }) => {
  const { label } = props;
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <LoginInput {...props} autoCorrect={false} autoCapitalize="none" />
    </InputContainer>
  );
};

export default Input;
