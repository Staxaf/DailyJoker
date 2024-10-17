import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  Main: undefined;
  History: undefined;
};

export const Stack = createNativeStackNavigator<StackParamList>();