import AsyncStorage from '@react-native-community/async-storage';

export const storeDataString = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    console.log(e);
  }
};

export const storeDataObject = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getDataString = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    console.log(e);
  }
};

export const getDataObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return console.log(e);
  }
};
