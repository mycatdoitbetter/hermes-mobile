import React from 'react';

import {
  ModalTitle,
  ConfigModal,
  IconProfile,
  List,
  ItemContainer,
  TextItem,
  FlagItem,
  TouchableModalButton,
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
