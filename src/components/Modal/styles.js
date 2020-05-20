import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

export const ModalTitle = styled.Text`
  position: absolute;
  top: 0;
  margin: 10px;

  font-size: 26px;
  font-weight: bold;
  color: #333;
`;

export const IconProfile = styled(Icon).attrs({ size: 25, color: '#E5E5E5' })`
  margin: 5px;
`;

export const ConfigModal = styled(Modal)`
  flex: 1;
  background-color: #4baf4f;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 140px 20px 140px;
`;
