import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #4baf4f;
  flex: 1;
`;

export const ImagePadlock = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
  margin-top: 50px;
  margin-bottom: -30px;
`;

export const AvoidingView = styled.KeyboardAvoidingView``;

export const RecoveryButton = styled(RectButton)`
  width: 75%;
  height: 40px;
  background-color: #314e5e;
  align-self: center;
  margin-top: 20px;
  border-radius: 8px;
  justify-content: center;
`;

export const TextRecoveryButton = styled.Text`
  align-self: center;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
`;

export const RecoveryText = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
`;
