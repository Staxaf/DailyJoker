import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAsyncStorageData = async <T>(key: string, value: T) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

export const getAsyncStorageData = async <T>(key: string): Promise<T | null> => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
