import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
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
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #314e5e;
  opacity: 0.8;
  border-radius: 8px;
  width: 75%;
  height: 45px;
  margin: 35px;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordTouchable = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
`;
