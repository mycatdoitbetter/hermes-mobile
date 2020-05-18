import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

export default function Packs() {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
      <Button title="logout" onPress={() => dispatch(signOut())} />
    </View>
  );
}
