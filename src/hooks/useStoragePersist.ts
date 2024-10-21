import {useState, useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveAsyncStorageData } from 'utils/storage';

// Hook for saving data in storage with generic type. Save when user wants to quit app.
const useStoragePersist = <T>(
  storageKey: string,
  data: T[],
): AppStateStatus => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'inactive' || nextAppState === 'background') {
        saveAsyncStorageData(storageKey, data); // when app state is inactive or background -> save data
      }
      setAppState(nextAppState);
    };
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [data]);

  return appState;
};

export default useStoragePersist;
