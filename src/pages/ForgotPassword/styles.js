import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.primary};
  padding-top: 30px;
  flex: 1;
`;

export const ImagePadlock = styled.Image`
  width: 220px;
  height: 220px;
  align-self: center;
`;

export const AvoidingView = styled.KeyboardAvoidingView``;

export const RecoveryButton = styled(RectButton)`
  width: 75%;
  height: 40px;
  background-color: ${({ theme }) => theme.tertiary};
  align-self: center;
  margin-bottom: 40px;
  margin-top: 20px;
  border-radius: 8px;
  justify-content: center;
`;

export const TextRecoveryButton = styled.Text`
  align-self: center;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.secondary};
`;

export const RecoveryText = styled.Text`
  align-self: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
`;
