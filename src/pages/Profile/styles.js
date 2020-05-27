import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native';
import Modal from 'react-native-modal';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const AvatarView = styled.View`
  background-color: ${({ theme }) => theme.tertiaryOpac};
  margin: 20px;

  border-radius: 8px;
  height: 180px;
  padding: 30px;
  flex-direction: row;
`;

export const ProfileText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  /* margin-left: 10px; */
  /* width: 80%; */
  flex-direction: row;
  color: ${({ theme }) => theme.secondary};
`;

export const ProfileTextView = styled.View`
  /* padding: 45px; */
  position: absolute;
  right: 15%;
  top: 50%;
  /* flex-direction: column; */
`;

export const Label = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.secondary};
  border-bottom-width: 2px;
  margin: 20px;
`;

export const LabelText = styled.Text`
  color: ${({ theme }) => theme.secondary};

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

export const ProfileDataFieldIcon = styled(Icon).attrs(({ theme }) => ({
  size: 25,
  color: theme.secondary,
}))``;

export const EditAvatarIcon = styled(Icon).attrs(({ theme }) => ({
  size: 20,
  color: theme.secondary,
}))``;

export const ProfileDataFieldText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
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
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 140px 20px 140px;
`;

export const IconProfile = styled(Icon).attrs(({ theme }) => ({
  size: 25,
  color: theme.secondary,
}))`
  margin: 5px;
`;

export const ModalTitle = styled.Text`
  position: absolute;
  top: 0;
  margin: 10px;

  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.textLabel};
`;
