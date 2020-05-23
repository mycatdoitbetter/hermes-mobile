import React, { useState } from 'react';
import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';
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

export function CardPack(
  item,
  navigation,
  setIsModalVisible,
  isModalVisible,
  setPackOnDetail
) {
  return (
    <CardContainer>
      <Touch
        onPress={() => {
          setPackOnDetail(item);
          setIsModalVisible(!isModalVisible);
        }}
      >
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
      <Touch onPress={() => navigation.navigate('Problems')}>
        {item.isProblem === false ? (
          <ReportProblem>Relatar Problemas</ReportProblem>
        ) : (
          <></>
        )}
      </Touch>
    </CardContainer>
  );
}

export function CardProblem(item) {
  return (
    <CardContainer>
      <Touch>
        <InfoIcon />
      </Touch>

      <CardTitle>{item.title}</CardTitle>
      <CardDetails>
        <CardDetail>
          Destinatário:{'  '}
          <CardDescription>
            {item.packages.recipients.name}
          </CardDescription>{' '}
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
}
