import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #4baf4f;
`;

export const Avatar = styled.Image`
  border: 2px;
  border-color: #c4c4c4;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const AvatarView = styled.View`
  width: 100%;
  height: 230px;
  padding: 40px;
  /* background-color: #333; */
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
export const LabelIcon = styled(Icon).attrs({ size: 25, color: '#E5E5E5' })`
  margin: 5px;
`;
export const LabelText = styled.Text`
  color: #e5e5e5;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;

export const ProfileDataFieldView = styled.View`
  margin: 5px 0px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProfileDataFieldIcon = styled(Icon).attrs({
  size: 25,
  color: '#E5E5E5',
})`
  margin-left: 40px;
`;
export const ProfileDataFieldDescription = styled.Text`
  margin-right: 40px;
  font-size: 18px;
  font-weight: 600;
  color: #e5e5e5;
`;
