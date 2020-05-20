import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Flag from 'react-native-flags';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import { Modal, ModalList } from '../../components/Modal';
import {
  Container,
  Avatar,
  AvatarView,
  ProfileText,
  ProfileTextView,
  Label,
  LabelText,
  ProfileDataFieldView,
  ProfileDataFieldIcon,
  ProfileDataFieldText,
  ConfigView,
  ConfigSwitchTheme,
  IconProfile,
} from './styles';

export default function Profile() {
  const [theme, setTheme] = useState(true);
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [actualLanguage, setActualLanguage] = useState('BR');

  const dispatch = useDispatch();

  const languages = [
    { label: 'Português', code: 'BR' },
    { label: 'English', code: 'US' },
  ];

  const LabelProfile = ({ iconName, labelName }) => (
    <Label>
      <LabelText>{labelName}</LabelText>
      <IconProfile name={iconName} />
    </Label>
  );

  const FieldsProfile = ({ iconName, field }) => (
    <ProfileDataFieldView>
      <ProfileDataFieldIcon name={iconName} />
      <ProfileDataFieldText>{field}</ProfileDataFieldText>
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
      <>
        <FieldsProfile field="André Santos Castelo" iconName="user" />
        <FieldsProfile field="andre@gmail.com" iconName="mail" />
        <FieldsProfile field="123.123.123-12" iconName="credit-card" />
      </>
      <LabelProfile iconName="settings" labelName="Configurações" />
      <>
        <ConfigView>
          <ProfileDataFieldText>Tema</ProfileDataFieldText>
          {theme ? <IconProfile name="sun" /> : <IconProfile name="moon" />}
          <ConfigSwitchTheme
            value={theme}
            onValueChange={() => setTheme(!theme)}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
        </ConfigView>

        <TouchableOpacity onPress={() => setLanguageModalVisible(true)}>
          <ConfigView>
            <ProfileDataFieldText>Idioma</ProfileDataFieldText>
            <Flag
              code={actualLanguage}
              size={32}
              type="shiny"
              style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
            />
          </ConfigView>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setInfoModalVisible(!isInfoModalVisible)}
        >
          <ConfigView>
            <ProfileDataFieldText>Informações</ProfileDataFieldText>
            <IconProfile name="info" />
          </ConfigView>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(signOut())}>
          <ConfigView
            style={{
              paddingBottom: 5,
              paddingTop: 5,
              marginBottom: 30,

              justifyContent: 'space-around',

              backgroundColor: '#314E5E',
              borderRadius: 8,
            }}
          >
            <ProfileDataFieldText
              style={{
                fontWeight: 'bold',
                alignSelf: 'center',
              }}
            >
              Sair
            </ProfileDataFieldText>
            <IconProfile name="log-out" />
          </ConfigView>
        </TouchableOpacity>
      </>

      <Modal
        isVisible={isInfoModalVisible}
        title="Informações"
        toogleFunction={setInfoModalVisible}
      />

      <ModalList
        isVisible={isLanguageModalVisible}
        title="Linguagens"
        toogleFunction={setLanguageModalVisible}
        data={languages}
        // Container={ModalLanguageList}
      />
    </Container>
  );
}
