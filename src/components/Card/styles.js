import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const CardContainer = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.secondary};
  height: 169px;
  margin: 10px;
  border-radius: 8px;
  align-self: center;
`;

export const CardTitle = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.tertiary};
  font-size: 17px;
  align-self: center;
  position: absolute;
  top: 10px;
`;

export const CardDetail = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.textTopic};
  font-size: 16px;
  align-self: flex-start;
  margin: 5px;
  margin-left: 10px;
`;

export const CardDescription = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.tertiary};
  font-size: 16px;
`;

export const CardDetails = styled.View`
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
  align-self: flex-end;
  top: 5px;
  right: 5px;
  color: ${({ theme }) => theme.tertiary};
`;

export const CardList = styled(FlatList)``;
