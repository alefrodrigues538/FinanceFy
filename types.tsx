import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

//-------------------------------------------------------------
// ROOT TYPES
//-------------------------------------------------------------
export type RootStackParamList = {
  Main: NativeStackScreenProps<MainParamList> | undefined,
  Login: NavigatorScreenParams<LoginStackParamList> | undefined;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList> | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;


//-------------------------------------------------------------
// MAINSTACK TYPES
//-------------------------------------------------------------
//Lista de telas e parametros
export type MainParamList = {
  Home: undefined;
  Transactions: undefined;
  Earnings: undefined;
  Expenses: undefined;
  Settings: undefined
}

//props da stack
export type MainScreenProps<Screen extends keyof MainParamList> =
  NativeStackScreenProps<
    MainParamList,
    Screen
  >;

//Jução das props de cada tela da stack com a RootStack
export type HomeScreenProps = CompositeScreenProps<
  MainScreenProps<'Home'>,
  CompositeScreenProps<
    NativeStackScreenProps<MainParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;
export type TransactionsScreenProps = CompositeScreenProps<
  MainScreenProps<'Transactions'>,
  CompositeScreenProps<
    NativeStackScreenProps<MainParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;
export type EarningsScreenProps = CompositeScreenProps<
  MainScreenProps<'Earnings'>,
  CompositeScreenProps<
    NativeStackScreenProps<MainParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;
export type ExpensesScreenProps = CompositeScreenProps<
  MainScreenProps<'Expenses'>,
  CompositeScreenProps<
    NativeStackScreenProps<MainParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;
export type SettingsScreenProps = CompositeScreenProps<
  MainScreenProps<'Settings'>,
  CompositeScreenProps<
    NativeStackScreenProps<MainParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;


//-------------------------------------------------------------
// LOGINSTACK TYPES
//-------------------------------------------------------------
export type LoginStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  RecoverPassword: undefined;
}

export type LoginStackScreenProps<Screen extends keyof LoginStackParamList> = NativeStackScreenProps<
  LoginStackParamList,
  Screen
>;

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList> &
  LoginStackScreenProps<'SignIn'>;
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList> &
  LoginStackScreenProps<'SignUp'>;
export type RecoverPasswordScreenProps = NativeStackScreenProps<RootStackParamList> &
  LoginStackScreenProps<'RecoverPassword'>;


//-------------------------------------------------------------
// PROFILESTACK TYPES
//-------------------------------------------------------------
export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type ProfileStackScreenProps<Screen extends keyof ProfileStackParamList> = NativeStackScreenProps<
  ProfileStackParamList,
  Screen
>;

export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList> &
  ProfileStackScreenProps<'Profile'>;
export type EditProfileScreenProps = NativeStackScreenProps<RootStackParamList> &
  ProfileStackScreenProps<'EditProfile'>;