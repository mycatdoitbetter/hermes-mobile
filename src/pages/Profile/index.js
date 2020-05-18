import React from 'react';
import {} from 'react-native';

import {
  Container,
  Avatar,
  AvatarView,
  ProfileText,
  ProfileTextView,
  Label,
  LabelIcon,
  LabelText,
  ProfileDataFieldView,
  ProfileDataFieldIcon,
  ProfileDataFieldDescription,
} from './styles';

export default function Profile() {
  const LabelProfile = ({ iconName, labelName }) => (
    <Label>
      <LabelText>{labelName}</LabelText>
      <LabelIcon name={iconName} />
    </Label>
  );

  const FieldsProfile = ({ iconName, field }) => (
    <ProfileDataFieldView>
      <ProfileDataFieldIcon name={iconName} />
      <ProfileDataFieldDescription>{field}</ProfileDataFieldDescription>
    </ProfileDataFieldView>
  );

  return (
    <Container>
      <AvatarView>
        <Avatar
          source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
        />
        <ProfileTextView>
          <ProfileText>André Santos</ProfileText>
          <ProfileText>Entregador</ProfileText>
        </ProfileTextView>
      </AvatarView>
      <LabelProfile iconName="user" labelName="Dados Pessoais" />
      <FieldsProfile field="André Santos Castelo" iconName="user" />
      <FieldsProfile field="andre@gmail.com" iconName="mail" />
      <FieldsProfile field="123.123.123-12" iconName="credit-card" />
      <LabelProfile iconName="settings" labelName="Configurações" />
    </Container>
  );
}
