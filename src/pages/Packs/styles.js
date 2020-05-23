import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;

  background-color: #4baf4f;
`;

export const PackContainer = styled.View`
  width: 80%;
  background-color: #f3f9e3;
  height: 168px;
  margin: 10px;
  border-radius: 8px;
  align-self: center;
`;

export const PackTitle = styled.Text`
  font-weight: bold;
  color: #314e5e;
  font-size: 16px;
  align-self: center;
  text-align: center;
  margin-top: -40px;
  width: 65%;
`;
export const PackDetail = styled.Text`
  font-weight: bold;
  color: #666666;
  font-size: 16px;

  align-self: flex-start;
  margin: 5px;
  margin-left: 10px;
`;
export const PackDescription = styled.Text`
  font-weight: bold;
  color: #314e5e;
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
  color: #f97068;
  font-size: 16px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Touch = styled.TouchableOpacity``;

export const InfoIcon = styled(Icon).attrs({ name: 'info', size: 27 })`
  color: #314e5e;
  align-self: flex-end;
  margin: 10px;
`;

export const PackList = styled(FlatList)``;
