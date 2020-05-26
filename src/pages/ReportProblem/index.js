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

      const response = await api.post(
        '/problems/create',
        { title, description },
        {
          params: {
            id,
          },
        }
      );
      setFetch(false);
      console.warn(response.status);
    } catch (error) {
      setFetch(false);
      console.warn(error);
    }
  }
  function VerifyEntry(t, d) {
    if (t.length <= 1) {
      return (
        <TextProblemPack>
          Preencha os campos para gravar o problema
        </TextProblemPack>
      );
    }
    if (d.length <= 1) {
      return (
        <TextProblemPack>
          Preencha os campos para gravar o problema
        </TextProblemPack>
      );
    }
  }
  return (
    <Container>
      <ViewProblemPack>
        <TextProblemPack>{`Destinatário: ${recipientName}`}</TextProblemPack>
        <TextProblemPack>{`Produto: ${packName}`}</TextProblemPack>
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
