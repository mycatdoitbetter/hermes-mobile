import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const CardContainer = styled.View`

  width: 80%;
  background-color: #F3F9E3;
  /* background-color: ${(props) => (props.cor ? 'green' : 'purple')}; */
  height: 169px;

  margin: 10px;
  border-radius: 8px;
  align-self: center;
`;

export const CardTitle = styled.Text`
  font-weight: bold;
  color: #314e5e;
  font-size: 17px;
  align-self: center;
  position: absolute;
  top: 10;
`;
export const CardDetail = styled.Text`
  font-weight: bold;
  color: #666666;
  font-size: 16px;

  align-self: flex-start;
  margin: 5px;
  margin-left: 10px;
`;
export const CardDescription = styled.Text`
  font-weight: bold;
  color: #314e5e;
  font-size: 16px;
`;
export const CardDetails = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ReportProblem = styled.Text`
  font-weight: bold;
  color: #f97068;
  font-size: 16px;
  align-self: center;

  /* position: absolute; */
  margin-bottom: 10px;
`;

export const Touch = styled.TouchableOpacity``;

export const InfoIcon = styled(Icon).attrs({ name: 'info', size: 27 })`
  /* position: absolute; */
  align-self: flex-end;
  top: 5px;
  right: 5px;
  /* color: #314e5e; */
  /* align-self: flex-end; */
  /* margin: 10px; */
`;

export const CardList = styled(FlatList)``;