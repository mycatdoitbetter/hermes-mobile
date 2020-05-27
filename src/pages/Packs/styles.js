import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

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

export const PackList = styled(FlatList)``;
