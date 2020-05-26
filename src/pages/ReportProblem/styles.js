import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../utils/colors';

export const Container = styled.ScrollView.attrs({
  justifyContent: 'center',
})`
  flex: 1;
  background-color: ${colors.background};
  /* padding: 30px 0 0; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const ViewProblemTitle = styled.View`
  width: 70%;
  height: 40px;
  border-bottom-color: rgba(255, 255, 255, 0.5);
  border-bottom-width: 1px;
  align-self: center;
`;

export const InputProblemTitle = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  font-size: 16px;
  color: #fff;
  width: 100%;
  font-weight: bold;
`;

export const ViewProblemDescription = styled.View`
  align-self: center;
  width: 75%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 30px;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  padding: 0 10px 0;
`;

export const InputProblemDescription = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
  placeholder: 'Descrição do problema',
})`
  font-size: 16px;
  color: #fff;
  width: 100%;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #314e5e;
  opacity: 0.8;
  border-radius: 8px;
  width: 75%;
  height: 45px;
  margin: 5px;

  align-self: center;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
`;

export const TextProblemPack = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ViewProblemPack = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(49, 78, 94, 0.2);
  width: 80%;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 30px;
  align-self: center;
`;

export const SubmitText = styled.Text`
  /* background-color: #fff; */
  font-size: 18px;
  color: #fff;
  font-weight: 700;
`;
