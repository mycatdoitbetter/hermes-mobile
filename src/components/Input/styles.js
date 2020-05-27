import styled from 'styled-components/native';

export const LoginInput = styled.TextInput`
  width: 100%;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.opacityWhite};
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
`;

export const InputLabel = styled.Text`
  color: ${({ theme }) => theme.secondary};
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
`;

export const InputContainer = styled.View`
  margin: 5px;
  width: 75%;
  align-self: center;
`;
