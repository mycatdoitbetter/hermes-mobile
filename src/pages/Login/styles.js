import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const LogoAndNameImage = styled.Image`
  width: 328px;
  height: 223px;
  align-self: center;
  margin-bottom: -20px;
`;

export const AvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  align-self: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 16px;
  font-weight: 600;
  position: relative;
`;

export const SubmitButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.tertiary};
  opacity: 0.8;
  border-radius: 8px;
  width: 75%;
  height: 45px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordTouchable = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.secondary};
  font-weight: 700;
`;
