import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Login: {
        screens: {
          SignIn: {
            screens: {
              SignInScreen: 'signin'
            }
          },
          SignUp: {
            screens: {
              SignUpScreen: 'signup'
            }
          },
          RecoverPassword: {
            screens: {
              RecoverPasswordScreen: 'recover_password'
            }
          }
        }
      },
      NotFound: '*',
    },
  },
};

export default linking;
