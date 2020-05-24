import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Flag from 'react-native-flags';

export const ModalView = styled.View`
  /* flex: 1; */
  background-color: #4baf4f;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 7px;
  height: 260px;
  width: 95%;

  /* margin: auto; */
  padding: 5px;
`;

export const ModalTitle = styled.Text`
  position: absolute;
  top: 0;
  margin: 10px;

  font-size: 25px;
  /* font-weight: bold; */
  color: #fff;
`;

export const IconProfile = styled(Icon).attrs({ size: 25, color: '#E5E5E5' })`
  margin: 5px;
`;

export const ConfigModal = styled(Modal).attrs({
  animationOutTiming: 700,
  backdropTransitionOutTiming: 1400,
})``;

export const TouchableModalButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
`;

export const List = styled(FlatList).attrs({
  justifyContent: 'center',
})`
  width: 80%;
`;

export const ItemContainer = styled(RectButton)`
  background-color: rgba(49, 78, 94, 0.4);
  height: 50px;
  border-radius: 6px;
  margin: 5px 0 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextItem = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 20px;
`;

export const FlagItem = styled(Flag)`
  width: 50px;
  height: 30px;
  margin-right: 20px;
`;

export const Label = styled.Text`
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const Description = styled.Text`
  color: #ffff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  /* margin-bottom: 10px; */
`;

export const StatusText = styled.Text`
  color: #f97068;
  font-size: 18px;
  position: absolute;
  text-align: center;
  bottom: 0;
  font-weight: bold;
  margin-bottom: 10px;
`;
