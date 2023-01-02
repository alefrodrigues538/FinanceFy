import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RecoverPassword from '../screens/RecoverPassword';
import { LoginStackParamList } from '../types';

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
            <Stack.Screen name='RecoverPassword' component={RecoverPassword}></Stack.Screen>
        </Stack.Navigator>
    )
}