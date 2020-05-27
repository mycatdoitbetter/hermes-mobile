import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {
  Container,
  ViewProblemDescription,
  InputProblemDescription,
  ViewProblemTitle,
  InputProblemTitle,
  SubmitButton,
  SubmitText,
  TextProblemPack,
  ViewProblemPack,
} from './styles';

export default function ReportProblem({ route, navigation }) {
  const { id, packName, recipientName } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fetch, setFetch] = useState(false);

  async function recordProblem() {
    try {
      setFetch(true);

      await api.post(
        '/problems/create',
        { title, description },
        {
          params: {
            id,
          },
        }
      );
      setFetch(false);
    } catch (error) {
      setFetch(false);
      console.warn(error);
    }
  }

  return (
    <Container>
      <ViewProblemPack>
        <TextProblemPack>Destinatário:</TextProblemPack>
        <TextProblemPack>{`${recipientName}`}</TextProblemPack>
        <TextProblemPack />
        <TextProblemPack>Produto:</TextProblemPack>
        <TextProblemPack>{`${packName}`}</TextProblemPack>
      </ViewProblemPack>
      <ViewProblemTitle>
        <InputProblemTitle
          placeholder="Título do problema"
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
      </ViewProblemTitle>
      <ViewProblemDescription>
        <InputProblemDescription
          multiline
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
      </ViewProblemDescription>

      <SubmitButton
        enabled={title.length > 3 && description.length > 3}
        onPress={() => {
          recordProblem();
          navigation.navigate('Packs');
        }}
      >
        {fetch ? <ActivityIndicator /> : <SubmitText>Enviar</SubmitText>}
      </SubmitButton>
    </Container>
  );
}
