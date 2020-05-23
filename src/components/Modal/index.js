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
} from './styles';

export function Modal({ isVisible, title, toogleFunction }) {
  return (
    <ConfigModal isVisible={isVisible}>
      <TouchableModalButton
        onPress={() => {
          toogleFunction(false);
        }}
      >
        <IconProfile name="x" />
      </TouchableModalButton>

      <ModalTitle>{title}</ModalTitle>
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
      {isProblem
        ? 'Entrega com problemas!'
        : isCanceled
        ? 'Entrega cancelada'
        : already && dispatched
        ? 'Entrega realizada'
        : already && !dispatched
        ? 'Pronto para entrega'
        : 'Entrega prevista'}
    </StatusText>
  );
};
export function ModalDetail({ isVisible, title, toogleFunction, item }) {
  item = {
    address: `${item?.recipient?.street} - N° ${item?.recipient?.number},  ${item?.recipient?.complement}`,
    complement: `${item?.recipient?.complement}`,
    country: `Cidade: ${item?.recipient?.city} - ${item?.recipient?.state}`,
    product: item?.product,
    name: item?.recipient?.name,
    cpf: item?.recipient?.cpf,
    cep: item?.recipient?.cep,
    isProblem: item?.isProblem,
    isCanceled: item?.canceled_at === true,
    already: item?.start_date === true,
    dispatched: item?.end_date === true,
  };
  return (
    <ConfigModal isVisible={isVisible}>
      <ModalTitle>{title}</ModalTitle>
      <TouchableModalButton
        onPress={() => {
          toogleFunction(false);
        }}
      >
        <IconProfile name="x" />
      </TouchableModalButton>
      <Details detail={item.name} label="Destinatário" />
      <Details detail={item.cpf} label="CPF" />
      <Details detail={item.address} label="Endereço" />
      <Details detail={item.cep} label="CEP" />
      <Details detail={item.product} label="Produto" />
      <Status item={item} />
    </ConfigModal>
  );
}
