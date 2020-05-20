import React from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';

import { ModalTitle, ConfigModal, IconProfile } from './styles';

export const Modal = ({ isVisible, title, toogleFunction }) => (
  <ConfigModal isVisible={isVisible}>
    <TouchableOpacity
      style={{ padding: 10, position: 'absolute', top: 0, left: 0 }}
      onPress={() => {
        toogleFunction(false);
      }}
    >
      <IconProfile name="x" />
    </TouchableOpacity>

    <ModalTitle>{title}</ModalTitle>
  </ConfigModal>
);

export const ModalList = ({ isVisible, title, toogleFunction, data }) => (
  <ConfigModal isVisible={isVisible}>
    <TouchableOpacity
      style={{ padding: 10, position: 'absolute', top: 0, left: 0 }}
      onPress={() => {
        toogleFunction(false);
      }}
    >
      <IconProfile name="x" />
    </TouchableOpacity>
    <FlatList
      data={data}
      style={{
        backgroundColor: '#2222',
        width: '80%',
        marginTop: 60,
        marginBottom: 20,
      }}
      renderItem={({ item }) => (
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Text>{item.label}</Text>
        </View>
      )}
      keyExtractor={({ code }) => String(code)}
    />
    <ModalTitle>{title}</ModalTitle>
  </ConfigModal>
);
export const ModalInputs = ({ isVisible, title, toogleFunction }) => (
  <ConfigModal isVisible={isVisible}>
    <TouchableOpacity
      style={{ padding: 10, position: 'absolute', top: 0, left: 0 }}
      onPress={() => {
        toogleFunction(false);
      }}
    >
      <IconProfile name="x" />
    </TouchableOpacity>

    <ModalTitle>{title}</ModalTitle>
  </ConfigModal>
);
