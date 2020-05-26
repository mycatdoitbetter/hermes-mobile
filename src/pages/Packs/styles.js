import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;

  background-color: #4baf4f;
`;

export const TextWarning = styled.Text`
  font-weight: bold;
  color: #ffff;
  font-size: 20px;
  align-self: center;
  text-align: center;
  /* height: 100%; */
  /* margin-bottom: 10px; */
`;
export const IconWarning = styled(Icon).attrs({ size: 36 })`
  color: #ffff;
  align-self: center;
  /* height: 100%; */
  margin: 10px 0 70px;
`;

export const PackList = styled(FlatList)``;
