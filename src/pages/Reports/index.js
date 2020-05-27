import React from 'react';

import {
  Container,
  ProblemDescription,
  Assignature,
  ProblemTitle,
  TextProblemPack,
  ViewProblemPack,
} from './styles';

export default function ReportProblem({ route }) {
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
        <TextProblemPack>Destinatário</TextProblemPack>
        <TextProblemPack>{`${recipientName}`}</TextProblemPack>
        <TextProblemPack>Produto</TextProblemPack>
        <TextProblemPack>{`${product}`}</TextProblemPack>
      </ViewProblemPack>
      <ProblemTitle>{`${title}`}</ProblemTitle>
      <ViewProblemPack>
        <ProblemDescription>{`${description}`}</ProblemDescription>
        <Assignature>{`- Responsável: ${deliveryman}`}</Assignature>
      </ViewProblemPack>
    </Container>
  );
}
