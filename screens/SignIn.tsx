import React from 'react';
import { Button, View } from 'react-native';
import { Container, Paragraph } from '../components/GlobalComponents';
import { SignInScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';


const SignIn = ({ navigation }: SignInScreenProps) => {
    const navigate = useNavigation()
    return (
        <Container>
            <Paragraph>SignIn</Paragraph>
            <Button
                title='HomePage'
                onPress={() => navigation.navigate('Main')}
            />
        </Container>
    );
}

export default SignIn;