import type { RouteProp as NRouteProp } from '@react-navigation/core';

import type { AuthStackParamList, FeedStackParamList } from '@/navigation';

export type RootStackParamList = AuthStackParamList & FeedStackParamList; //  & FooStackParamList & BarStackParamList
// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
