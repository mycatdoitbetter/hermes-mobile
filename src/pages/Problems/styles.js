import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const PackContainer = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.secondary};
  height: 168px;
  margin: 10px;
  border-radius: 8px;
  align-self: center;
`;

export const PackTitle = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.tertiary};
  font-size: 16px;
  align-self: center;
  text-align: center;
  margin-top: -40px;
  width: 65%;
`;
export const PackDetail = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.textLabel};
  font-size: 16px;

  align-self: flex-start;
  margin: 5px;
  margin-left: 10px;
`;
export const PackDescription = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.tertiary};
  font-size: 16px;
  text-align: center;
  align-self: flex-start;
  margin: 10px;
`;
export const PackDetails = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ReportProblem = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.highlight};
  font-size: 16px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Touch = styled.TouchableOpacity``;

export const InfoIcon = styled(Icon).attrs({ name: 'info', size: 27 })`
  color: ${({ theme }) => theme.tertiary};
  align-self: flex-end;
  margin: 10px;
`;

export const PackList = styled(FlatList)``;

export const TextWarning = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  font-size: 20px;
  align-self: center;
  text-align: center;
`;
export const IconWarning = styled(Icon).attrs({ size: 36 })`
  color: ${({ theme }) => theme.secondary};
  align-self: center;

  margin: 10px 0 70px;
`;
