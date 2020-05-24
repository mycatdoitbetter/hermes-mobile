/* eslint-disable no-nested-ternary */
import React from 'react';
import { Text } from 'react-native';
import {
  ModalTitle,
  ConfigModal,
  IconProfile,
  List,
  ItemContainer,
  TextItem,
  FlagItem,
  TouchableModalButton,
  Label,
  Description,
  StatusText,
  ModalView,
} from './styles';

export function Modal({ isVisible, title, toogleFunction }) {
  return (
    <ConfigModal isVisible={isVisible}>
      <ModalView>
        <TouchableModalButton
          onPress={() => {
            toogleFunction(false);
          }}
        >
          <IconProfile name="x" />
        </TouchableModalButton>

        <ModalTitle>{title}</ModalTitle>
      </ModalView>
    </ConfigModal>
  );
}

const ListMount = (item) => (
  <ItemContainer>
    <TextItem>{item.label}</TextItem>
    <FlagItem code={item.code} />
  </ItemContainer>
);

export function ModalList({ isVisible, title, toogleFunction, data }) {
  return (
    <ConfigModal isVisible={isVisible}>
      <ModalView>
        <TouchableModalButton
          onPress={() => {
            toogleFunction(false);
          }}
        >
          <IconProfile name="x" />
        </TouchableModalButton>
        <List
          data={data}
          renderItem={({ item }) => ListMount(item)}
          keyExtractor={({ code }) => String(code)}
        />
        <ModalTitle>{title}</ModalTitle>
      </ModalView>
    </ConfigModal>
  );
}

const Details = ({ label, detail }) => (
  <>
    <Label>{label}</Label>
    <Description>{detail}</Description>
  </>
);
const Status = ({ item }) => {
  const { isProblem, isCanceled, already, dispatched } = item;
  console.warn(isProblem, isCanceled, already, dispatched);
  return (
    <StatusText>
      {item.canceled_at
        ? 'Entrega cancelada'
        : item.start_date && item.end_date
        ? 'Entrega realizada'
        : item.start_date && !item.end_date
        ? 'Entrega em andamento'
        : 'Pronto para retirada'}
    </StatusText>
  );
};

export function ModalDetail({ isVisible, title, toogleFunction, item }) {
  console.warn(item);
  item = {
    address: `${item?.recipients?.street} - N° ${item?.recipients?.number},  ${item?.recipients?.complement}`,
    complement: `${item?.recipients?.complement}`,
    country: `Cidade: ${item?.recipients?.city} - ${item?.recipients?.state}`,
    product: item?.product,
    name: item?.recipients?.name,

    cep: item?.recipients?.cep,
    isProblem: item?.isProblem,
    isCanceled: item?.canceled_at === true,
    already: item?.start_date === true,
    dispatched: item?.end_date === true,
  };
  return (
    <ConfigModal isVisible={isVisible}>
      <ModalView style={{ height: 400 }}>
        <TouchableModalButton
          onPress={() => {
            toogleFunction(false);
          }}
        >
          <IconProfile name="x" />
        </TouchableModalButton>
        <ModalTitle>{title}</ModalTitle>
        <Details detail={item.name} label="Destinatário" />

        <Details detail={item.address} label="Endereço" />
        <Details detail={item.cep} label="CEP" />
        <Details detail={item.product} label="Produto" />
        <Status item={item} />
      </ModalView>
    </ConfigModal>
  );
}
