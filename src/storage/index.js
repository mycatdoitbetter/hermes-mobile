import AsyncStorage from '@react-native-community/async-storage';

export const storeDataString = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const storeDataObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getDataString = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value);
    if (value !== null) {
      // return value;
    }
    // return value;
  } catch (e) {
    console.log(e);
  }
};

export const getDataObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return console.log(e);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};
