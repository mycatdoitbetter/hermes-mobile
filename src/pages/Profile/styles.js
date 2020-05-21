import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native';
import Modal from 'react-native-modal';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #4baf4f;
`;

export const Avatar = styled.Image`
  border-width: 2px;
  border-color: #c4c4c4;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const AvatarView = styled.View`
  background-color: rgba(49, 78, 94, 0.2);
  margin: 20px;

  border-radius: 8px;
  height: 180px;
  padding: 30px;
  flex-direction: row;
`;

export const ProfileText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
  flex-direction: row;
  color: #e5e5e5;
`;

export const ProfileTextView = styled.View`
  padding: 45px;
  flex-direction: column;
`;

export const Label = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #ffff;
  border-bottom-width: 2px;
  margin: 20px;
`;

export const LabelText = styled.Text`
  color: #e5e5e5;
  font-size: 19px;
  font-weight: bold;
  margin: 5px;
`;

export const ProfileDataFieldView = styled.View`
  margin: 5px 40px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileDataFieldIcon = styled(Icon).attrs({
  size: 25,
  color: '#E5E5E5',
})``;

export const ProfileDataFieldText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #e5e5e5;
`;

export const ConfigView = styled.View`
  margin: 5px 40px 5px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ConfigSwitchTheme = styled(Switch)``;

export const ConfigModal = styled(Modal)`
  flex: 1;
  background-color: #4baf4f;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 140px 20px 140px;
`;

export const IconProfile = styled(Icon).attrs({ size: 25, color: '#E5E5E5' })`
  margin: 5px;
`;

export const ModalTitle = styled.Text`
  position: absolute;
  top: 0;
  margin: 10px;

  font-size: 26px;
  font-weight: bold;
  color: #333;
`;
