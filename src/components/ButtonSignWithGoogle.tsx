import * as React from "react";
import { View, Button } from "react-native";

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import OAuthGoogle from '../config/OAuthGoogle'
import { storeData } from '../hooks/useAsyncStorage';

const ButtonSignInWithGoogle = () => {
    const [accessToken, setAccessToken] = React.useState<any>(null)
    const [user, setUser] = React.useState(null);

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: OAuthGoogle.web,
        iosClientId: OAuthGoogle.ios,
        androidClientId: OAuthGoogle.android
    });

    React.useEffect(() => {

        if (response?.type === "success") {
            setAccessToken(response.authentication?.accessToken)
            storeData("accessToken", accessToken);
            accessToken && fetchUserInfo();

            console.log(accessToken, user);

        }

    }, [response, accessToken])

    async function fetchUserInfo() {
        let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        const userInfo = await response.json();
        setUser(userInfo)
    }

    return (
        <View>
            <Button title="Sign in with Google" onPress={fetchUserInfo} />
        </View>
    )
};

export default ButtonSignInWithGoogle;