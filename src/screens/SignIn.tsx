import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Container, Paragraph } from '../components/GlobalComponents';
import { SignInScreenProps } from '../types';
import Button from '../components/Button';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import ButtonSignInWithGoogle from '../components/ButtonSignWithGoogle';

const SignIn = ({ navigation }: SignInScreenProps) => {

    return (
        <Container>
            <Paragraph>SignIn</Paragraph>

            <View style={{ paddingHorizontal: 16, width: '100%' }}>
                <View>
                    <TextInput placeholder='Email' />
                    <Button
                        title='Continuar'
                        onPress={() => { navigation.navigate("Main") }} />
                </View>
                <Text style={{ marginVertical: 16, width: '100%', textAlign: 'center' }}>Ou</Text>
                <Button
                    containerStyle={{
                        width: '100%',
                        marginBottom: 8
                    }}
                    onPress={() => navigation.navigate("Main")}
                    RightIcon={<MaterialIcons name="smartphone" size={24} color="black" />}
                    title='Entrar com Smartphone' />
                {/* <Button
                    onPress={() => {
                        handleSignInWithGoogle()
                    }}
                    RightIcon={<Ionicons name="ios-logo-google" size={20} color="black" />}
                    title='Entrar com Google'
                    containerStyle={{
                        width: '100%',
                        marginBottom: 8
                    }} /> */}

                <ButtonSignInWithGoogle></ButtonSignInWithGoogle>
            </View>
        </Container>
    );
}

export default SignIn;