import React from 'react';
import {
  CardContainer,
  CardTitle,
  Touch,
  InfoIcon,
  ReportProblem,
  CardDetails,
  CardDetail,
  CardDescription,
} from './styles';

export const CardPack = (item) => (
  <CardContainer>
    <Touch>
      <InfoIcon />
    </Touch>
    <CardTitle>
      {item.start_date ? 'Item retirado' : 'Disponível para entrega'}
    </CardTitle>
    <CardDetails>
      <CardDetail>
        Destinatário:{'  '}
        <CardDescription>{item.recipient.name}</CardDescription>{' '}
      </CardDetail>
      <CardDetail>
        Produto:
        {'  '}
        <CardDescription>{item.product}</CardDescription>{' '}
      </CardDetail>
    </CardDetails>
    <Touch>
      <ReportProblem>Relatar Problemas</ReportProblem>
    </Touch>
  </CardContainer>
);

export const CardProblem = (item) => (
  <CardContainer>
    <Touch>
      <InfoIcon />
    </Touch>

    <CardTitle>{item.title}</CardTitle>
    <CardDetails>
      <CardDetail>
        Destinatário:{'  '}
        <CardDescription>{item.packages.recipients.name}</CardDescription>{' '}
      </CardDetail>
      <CardDetail>
        Produto:
        {'  '}
        <CardDescription>{item.packages.product}</CardDescription>{' '}
      </CardDetail>
    </CardDetails>
    <Touch>
      <ReportProblem>Relatar Problemas</ReportProblem>
    </Touch>
  </CardContainer>
);
