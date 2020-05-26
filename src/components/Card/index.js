/* eslint-disable no-nested-ternary */
import React from 'react';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

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
        {item.canceled_at
          ? 'Entrega cancelada'
          : item.start_date && item.end_date
          ? 'Entrega realizada'
          : item.start_date && !item.end_date
          ? 'Entrega em andamento'
          : 'Pronto para retirada'}
      </CardTitle>

      <CardDetails>
        <CardDetail>
          Destinatário:{'  '}
          <CardDescription>{item.recipients.name}</CardDescription>{' '}
        </CardDetail>
        <CardDetail>
          Produto:
          {'  '}
          <CardDescription>{item.product}</CardDescription>{' '}
        </CardDetail>
      </CardDetails>

      <Touch
        onPress={() =>
          navigation.navigate('Report', {
            id: item.id,
            packName: item.product,
            recipientName: item.recipients.name,
          })
        }
      >
        <ReportProblem>Problemas com a entrega?</ReportProblem>
      </Touch>
    </CardContainer>
  );
}

export function CardProblem(
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
      <Touch
        onPress={() =>
          navigation.navigate('Reports', {
            title: item.title,
            description: item.description,
            product: item.packages.product,
            recipientName: item.packages.recipients.name,
            deliveryman: item.packages.deliveryman.name,
          })
        }
      >
        <ReportProblem>Entenda o problema</ReportProblem>
      </Touch>
    </CardContainer>
  );
}

export function ShimmerCard({ fetch }) {
  return (
    <CardContainer>
      <InfoIcon />
      <CardTitle>
        <ShimmerPlaceHolder autoRun visible={fetch} />
      </CardTitle>

      <CardDetails>
        <CardDetail>
          <ShimmerPlaceHolder autoRun visible={fetch} />
        </CardDetail>
        <CardDetail>
          <ShimmerPlaceHolder autoRun visible={fetch} />
        </CardDetail>
      </CardDetails>

      <ReportProblem>
        <ShimmerPlaceHolder
          autoRun
          visible={fetch}
          style={{ flex: 1, borderRadius: 7 }}
        />
      </ReportProblem>
    </CardContainer>
  );
}
