import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../utils/colors';

export const Container = styled.ScrollView.attrs({
  paddingVertical: 70,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const ViewProblemTitle = styled.View`
  width: 70%;
  height: 40px;
  border-bottom-color: ${({ theme }) => theme.opacityWhite};
  border-bottom-width: 1px;
  align-self: center;
`;

export const InputProblemTitle = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  font-weight: bold;
`;

export const ViewProblemDescription = styled.View`
  align-self: center;
  width: 75%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 30px;
  border-radius: 6px;
  color: ${({ theme }) => theme.secondary};
  font-size: 18px;
  padding: 0 10px 0;
`;

export const InputProblemDescription = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
  placeholder: 'Descrição do problema',
})`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.tertiary};
  opacity: 0.8;
  border-radius: 8px;
  width: 75%;
  height: 45px;
  margin: 5px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const TextProblemPack = styled.Text.attrs({})`
  font-size: 18px;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  align-self: center;
  margin: 5px;
  text-align: center;
`;

export const ViewProblemPack = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.tertiaryOpac};
  width: 80%;
  border-radius: 8px;
  /* margin-bottom: 30px; */
  padding: 10px;
  align-self: center;
`;

export const ProblemTitle = styled.Text`
  padding: 20px;
  font-size: 22px;
  color: ${({ theme }) => theme.secondary};
  font-weight: 700;
  align-self: center;
`;

export const ProblemDescription = styled.Text`
  padding: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
`;

export const Assignature = styled.Text`
  padding: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.assig};
`;
