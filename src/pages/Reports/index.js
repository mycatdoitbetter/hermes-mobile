import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {
  Container,
  ViewProblemDescription,
  InputProblemDescription,
  ProblemDescription,
  InputProblemTitle,
  Assignature,
  ProblemTitle,
  TextProblemPack,
  ViewProblemPack,
} from './styles';

export default function ReportProblem({ route, navigation }) {
  const {
    title,
    description,
    recipientName,
    product,
    deliveryman,
  } = route.params;

  return (
    <Container>
      <ViewProblemPack>
        <TextProblemPack>{`Destinatário: ${recipientName}`}</TextProblemPack>
        <TextProblemPack>{`Produto: ${product}`}</TextProblemPack>
      </ViewProblemPack>
      <ProblemTitle>{`${title}`}</ProblemTitle>
      <ViewProblemPack>
        <ProblemDescription>{`${description}`}</ProblemDescription>
        <Assignature>{`- Responsável: ${deliveryman}`}</Assignature>
      </ViewProblemPack>
    </Container>
  );
}
